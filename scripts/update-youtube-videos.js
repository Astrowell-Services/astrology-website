/**
 * Automation Script: Update Latest YouTube Videos from Public RSS Feed
 * 
 * Target Channel: @AstronamaAchariyaDebdutta (ID: UCqDfG4lWZ5OJgJSc2XK7g4A)
 * Schedule: Runs every 24 hours via GitHub Actions or locally via `npm run update-youtube`
 * 
 * Core Principles:
 * 1. Zero Database — saves directly to public/data/youtube-videos.json
 * 2. Zero API Key — uses public YouTube channel RSS feed
 * 3. Idempotent & Duplicate Protected — checks unique video IDs
 * 4. Fail-Safe — never destroys or empties existing video data on network failure
 */

const fs = require('fs');
const path = require('path');

// Configurable Channel ID via environment variable or default
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCqDfG4lWZ5OJgJSc2XK7g4A';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'youtube-videos.json');
const MAX_VIDEOS = 4;

function decodeXmlEntities(text) {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function extractTagContent(entry, tag) {
  const match = entry.match(new RegExp(`<${tag}>(.*?)</${tag}>`, 's'));
  return match ? match[1].trim() : '';
}

async function fetchLatestVideosFromRss(channelId) {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  console.log(`[YouTube RSS] Fetching feed from: ${rssUrl}`);

  const response = await fetch(rssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AstrologyWebsiteBot/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }

  const xml = await response.text();
  if (!xml || xml.trim().length === 0) {
    throw new Error('Received empty response from YouTube RSS feed.');
  }

  const entries = xml.split('<entry>').slice(1);
  if (entries.length === 0) {
    throw new Error('No <entry> tags found in YouTube RSS feed.');
  }

  const parsedVideos = [];

  for (const entry of entries) {
    const id = extractTagContent(entry, 'yt:videoId');
    let title = extractTagContent(entry, 'title');
    const publishedAt = extractTagContent(entry, 'published');

    if (!id) continue;

    // Clean title from CDATA if present and decode entities
    title = title.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1');
    title = decodeXmlEntities(title);

    parsedVideos.push({
      id,
      url: `https://www.youtube.com/watch?v=${id}`,
      title,
      publishedAt: publishedAt || new Date().toISOString(),
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    });
  }

  return parsedVideos;
}

function loadExistingVideos() {
  try {
    if (fs.existsSync(OUTPUT_FILE)) {
      const raw = fs.readFileSync(OUTPUT_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.videos)) {
        return data.videos;
      }
    }
  } catch (err) {
    console.warn('[YouTube RSS] Warning reading existing JSON file:', err.message);
  }
  return [];
}

async function updateYouTubeVideos() {
  console.log('[YouTube RSS] Starting automated YouTube video update check...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const existingVideos = loadExistingVideos();
  console.log(`[YouTube RSS] Currently stored videos: ${existingVideos.length}`);

  let freshVideos = [];
  try {
    freshVideos = await fetchLatestVideosFromRss(CHANNEL_ID);
    console.log(`[YouTube RSS] Successfully parsed ${freshVideos.length} videos from RSS feed.`);
  } catch (fetchError) {
    console.error('[YouTube RSS] Error fetching RSS feed:', fetchError.message);
    console.warn('[YouTube RSS] Preserving previously stored video data. Exiting safely.');
    process.exit(0); // Exit safely without modifying JSON
  }

  if (freshVideos.length === 0) {
    console.warn('[YouTube RSS] No valid videos parsed. Preserving existing video data.');
    process.exit(0);
  }

  // Combine and deduplicate
  const videoMap = new Map();

  // First insert fresh videos (they have latest metadata)
  for (const video of freshVideos) {
    if (!videoMap.has(video.id)) {
      videoMap.set(video.id, video);
    }
  }

  // Then add any previously stored videos
  for (const video of existingVideos) {
    if (!videoMap.has(video.id)) {
      videoMap.set(video.id, video);
    }
  }

  // Convert map to array and sort newest first by publishedAt
  const allVideos = Array.from(videoMap.values()).sort((a, b) => {
    const timeA = new Date(a.publishedAt || 0).getTime();
    const timeB = new Date(b.publishedAt || 0).getTime();
    return timeB - timeA;
  });

  // Keep exactly the latest MAX_VIDEOS (4)
  const finalVideos = allVideos.slice(0, MAX_VIDEOS);

  // Check if anything actually changed
  const existingIds = existingVideos.map(v => v.id).join(',');
  const newIds = finalVideos.map(v => v.id).join(',');

  const payload = {
    channelId: CHANNEL_ID,
    lastUpdated: new Date().toISOString(),
    videos: finalVideos,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2) + '\n', 'utf-8');

  if (existingIds !== newIds) {
    console.log('[YouTube RSS] Update successful! New video list:');
    finalVideos.forEach((v, i) => console.log(`  ${i + 1}. [${v.id}] ${v.title}`));
  } else {
    console.log('[YouTube RSS] No new video changes detected. Stored list is already up to date.');
  }
}

updateYouTubeVideos().catch(err => {
  console.error('[YouTube RSS] Unexpected error during execution:', err);
  process.exit(1);
});
