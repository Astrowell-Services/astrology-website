/**
 * Automation Script: Update Latest YouTube Videos
 * 
 * Target Channel: @AstronamaAchariyaDebdutta (ID: UCqDfG4lWZ5OJgJSc2XK7g4A)
 * 
 * Multi-Strategy Architecture:
 * Strategy 1: Public YouTube RSS Feed
 * Strategy 2: Direct Channel HTML Parser + Official YouTube oEmbed (100% Free, Zero API Keys, Reliable when RSS is 404)
 */

const fs = require('fs');
const path = require('path');

const CHANNEL_HANDLE = process.env.YOUTUBE_HANDLE || 'AstronamaAchariyaDebdutta';
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

async function fetchFromRss(channelId) {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  console.log(`[YouTube Updater] Trying Strategy 1 (RSS): ${rssUrl}`);

  const response = await fetch(rssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AstrologyWebsiteBot/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const xml = await response.text();
  const entries = xml.split('<entry>').slice(1);
  if (entries.length === 0) throw new Error('No entries in RSS feed');

  const parsed = [];
  for (const entry of entries) {
    const id = extractTagContent(entry, 'yt:videoId');
    let title = extractTagContent(entry, 'title');
    const publishedAt = extractTagContent(entry, 'published');
    if (!id) continue;
    title = decodeXmlEntities(title.replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1'));
    parsed.push({
      id,
      url: `https://www.youtube.com/watch?v=${id}`,
      title,
      publishedAt: publishedAt || new Date().toISOString(),
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    });
  }
  return parsed;
}

async function fetchVideoTitleFromOEmbed(videoId) {
  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const res = await fetch(oembedUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.title) return data.title;
    }
  } catch (err) {
    // Ignore and fallback
  }
  return null;
}

function parseRelativeDate(text) {
  if (!text) return null;
  const now = Date.now();
  const lower = text.toLowerCase();
  
  const minutesMatch = lower.match(/(\d+)\s*(?:minute|min|m\b)/);
  if (minutesMatch) return new Date(now - parseInt(minutesMatch[1], 10) * 60 * 1000).toISOString();

  const hoursMatch = lower.match(/(\d+)\s*(?:hour|h\b)/);
  if (hoursMatch) return new Date(now - parseInt(hoursMatch[1], 10) * 3600 * 1000).toISOString();
  
  const daysMatch = lower.match(/(\d+)\s*(?:day|d\b)/);
  if (daysMatch) return new Date(now - parseInt(daysMatch[1], 10) * 24 * 3600 * 1000).toISOString();
  
  const weeksMatch = lower.match(/(\d+)\s*(?:week|w\b)/);
  if (weeksMatch) return new Date(now - parseInt(weeksMatch[1], 10) * 7 * 24 * 3600 * 1000).toISOString();
  
  const monthsMatch = lower.match(/(\d+)\s*(?:month|mo\b)/);
  if (monthsMatch) return new Date(now - parseInt(monthsMatch[1], 10) * 30 * 24 * 3600 * 1000).toISOString();
  
  const yearsMatch = lower.match(/(\d+)\s*(?:year|y\b)/);
  if (yearsMatch) return new Date(now - parseInt(yearsMatch[1], 10) * 365 * 24 * 3600 * 1000).toISOString();

  return null;
}

function findLockupViewModels(obj, results = []) {
  if (!obj || typeof obj !== 'object') return results;
  if (obj.lockupViewModel && obj.lockupViewModel.contentId) {
    results.push(obj.lockupViewModel);
  }
  for (const k of Object.keys(obj)) {
    findLockupViewModels(obj[k], results);
  }
  return results;
}

async function fetchFromChannelHtml(handle) {
  const channelUrl = `https://www.youtube.com/@${handle}/videos`;
  console.log(`[YouTube Updater] Trying Strategy 2 (Direct Channel HTML): ${channelUrl}`);

  const res = await fetch(channelUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const html = await res.text();
  const parsed = [];

  // Try extracting structured richGridRenderer / lockupViewModels from ytInitialData
  const jsonMatch = html.match(/var ytInitialData = ({.*?});<\/script>/s);
  if (jsonMatch) {
    try {
      const data = JSON.parse(jsonMatch[1]);
      const lockups = findLockupViewModels(data);
      console.log(`[YouTube Updater] Discovered ${lockups.length} lockup items in ytInitialData.`);

      for (const l of lockups.slice(0, MAX_VIDEOS)) {
        const id = l.contentId;
        const meta = l.metadata?.lockupMetadataViewModel;
        const title = meta?.title?.content;
        const rows = meta?.metadata?.contentMetadataViewModel?.metadataRows || [];
        
        let relativeTime = '';
        for (const row of rows) {
          for (const part of row.metadataParts || []) {
            const label = part.accessibilityLabel || part.text?.content || '';
            if (label.toLowerCase().includes('ago')) {
              relativeTime = label;
              break;
            }
          }
          if (relativeTime) break;
        }

        const calculatedDate = parseRelativeDate(relativeTime) || new Date().toISOString();

        parsed.push({
          id,
          url: `https://www.youtube.com/watch?v=${id}`,
          title: title || `Astrology Video (${id})`,
          publishedAt: calculatedDate,
          thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
        });
      }
    } catch (parseErr) {
      console.warn('[YouTube Updater] Failed parsing ytInitialData:', parseErr.message);
    }
  }

  // Fallback to regex if ytInitialData didn't populate videos
  if (parsed.length === 0) {
    const videoIdMatches = Array.from(html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)).map(m => m[1]);
    const uniqueIds = [...new Set(videoIdMatches)].slice(0, MAX_VIDEOS);

    if (uniqueIds.length === 0) {
      throw new Error('No video IDs discovered in channel HTML.');
    }

    console.log(`[YouTube Updater] Fallback: Discovered ${uniqueIds.length} video IDs via regex.`);
    for (let i = 0; i < uniqueIds.length; i++) {
      const id = uniqueIds[i];
      const title = (await fetchVideoTitleFromOEmbed(id)) || `Astrology Video (${id})`;
      // If no relative time available, stagger by 24h intervals so they don't all look identical
      const fallbackDate = new Date(Date.now() - i * 24 * 3600 * 1000).toISOString();
      parsed.push({
        id,
        url: `https://www.youtube.com/watch?v=${id}`,
        title,
        publishedAt: fallbackDate,
        thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      });
    }
  }

  return parsed;
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
    console.warn('[YouTube Updater] Warning reading existing JSON:', err.message);
  }
  return [];
}

async function updateYouTubeVideos() {
  console.log('[YouTube Updater] Starting automated update check...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const existingVideos = loadExistingVideos();
  console.log(`[YouTube Updater] Stored videos count: ${existingVideos.length}`);

  let freshVideos = [];

  // Try Strategy 1 (RSS)
  try {
    freshVideos = await fetchFromRss(CHANNEL_ID);
    console.log(`[YouTube Updater] RSS fetch succeeded with ${freshVideos.length} videos.`);
  } catch (rssError) {
    console.warn(`[YouTube Updater] RSS fetch failed (${rssError.message}). Switching to Strategy 2 (Channel HTML + oEmbed)...`);
    
    // Try Strategy 2 (Channel HTML)
    try {
      freshVideos = await fetchFromChannelHtml(CHANNEL_HANDLE);
      console.log(`[YouTube Updater] Channel HTML fetch succeeded with ${freshVideos.length} videos.`);
    } catch (htmlError) {
      console.error('[YouTube Updater] Both strategies failed:', htmlError.message);
      console.warn('[YouTube Updater] Preserving existing video data. Exiting safely.');
      process.exit(0);
    }
  }

  if (freshVideos.length === 0) {
    console.warn('[YouTube Updater] No valid videos parsed. Preserving existing video data.');
    process.exit(0);
  }

  // Deduplicate and prioritize fresh videos, preserving original publish dates
  const videoMap = new Map();
  for (const v of freshVideos) {
    const existing = existingVideos.find(e => e.id === v.id);
    if (existing && existing.publishedAt) {
      // Keep previously locked upload date
      v.publishedAt = existing.publishedAt;
    }
    if (!videoMap.has(v.id)) videoMap.set(v.id, v);
  }
  for (const v of existingVideos) {
    if (!videoMap.has(v.id)) videoMap.set(v.id, v);
  }

  const finalVideos = Array.from(videoMap.values()).slice(0, MAX_VIDEOS);

  const existingIds = existingVideos.map(v => v.id).join(',');
  const newIds = finalVideos.map(v => v.id).join(',');

  const payload = {
    channelId: CHANNEL_ID,
    channelHandle: `@${CHANNEL_HANDLE}`,
    lastUpdated: new Date().toISOString(),
    videos: finalVideos,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2) + '\n', 'utf-8');

  if (existingIds !== newIds) {
    console.log('[YouTube Updater] Update successful! Newly populated video list:');
    finalVideos.forEach((v, i) => console.log(`  ${i + 1}. [${v.id}] ${v.title}`));
  } else {
    console.log('[YouTube Updater] Stored list is already up to date with the latest uploads.');
  }
}

updateYouTubeVideos().catch(err => {
  console.error('[YouTube Updater] Fatal error:', err);
  process.exit(1);
});
