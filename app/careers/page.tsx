"use client";

import { Navbar } from "@/app/components/Navbar";
import CareerExploreSection from "@/app/components/CareerExploreSection";
import PopularJobsSection from "@/app/components/PopularJobsSection";
import HeroOpportunitiesSection from "@/app/components/HeroOpportunitiesSection";
import Footer from "@/app/components/Footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <CareerExploreSection />
        <PopularJobsSection />
        <HeroOpportunitiesSection />
      </main>
      <Footer />
    </div>
  );
}
