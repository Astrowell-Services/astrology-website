"use client";

import React, { useState } from "react";
import ReportHero from "@/components/reports/ReportHero";
import WhyHandcrafted from "@/components/reports/WhyHandcrafted";
import ReportCatalog from "@/components/reports/ReportCatalog";
import ReportAnatomy from "@/components/reports/ReportAnatomy";
import ReportWorkflow from "@/components/reports/ReportWorkflow";
import ReportFaq from "@/components/reports/ReportFaq";
import ReportRequestModal from "@/components/reports/ReportRequestModal";
import { AstrologicalReport } from "@/data/reports";

export default function ReportClientPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<AstrologicalReport | null>(null);

  const handleOpenRequest = (report?: AstrologicalReport) => {
    if (report) {
      setSelectedReport(report);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const scrollToReports = () => {
    const el = document.getElementById("reports-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#24211F]">
      {/* 1. Page Hero Section */}
      <ReportHero onExploreClick={scrollToReports} />

      {/* 2. Why Handcrafted Reports Matter (5 Hallmark Cards: 3 in row 1, 2 centered in row 2) */}
      <WhyHandcrafted />

      {/* 3. Catalog of Comprehensive Astrological Reports */}
      <ReportCatalog onRequestReport={handleOpenRequest} />

      {/* 4. Anatomy of a Vedic Dossier (Inclusions & Archival Quality) */}
      <ReportAnatomy />

      {/* 5. How Your Report is Crafted & Delivered (4-step workflow) */}
      <ReportWorkflow />

      {/* 6. Frequently Asked Questions & WhatsApp Inquiry */}
      <ReportFaq />

      {/* Interactive Report Request Modal */}
      <ReportRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialReport={selectedReport}
      />
    </div>
  );
}
