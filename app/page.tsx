"use client";

import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import CareerExploreSection from '@/app/components/CareerExploreSection'
import TrustedStatsSection from '@/app/components/TrustedStatsSection'
import PopularJobsSection from '@/app/components/PopularJobsSection'
import LatexResumeBuilderSection from '@/app/components/LatexResumeBuilderSection'
import ChatbotCompanionSection from '@/app/components/ChatbotCompanionSection'
import HeroOpportunitiesSection from '@/app/components/HeroOpportunitiesSection'
import FAQSection from '@/app/components/FAQSection'
import ContactSection from '@/app/components/ContactSection'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
        <Navbar />
        <main>
          <Hero />
          <CareerExploreSection />
          <TrustedStatsSection />
          <PopularJobsSection />
          <LatexResumeBuilderSection />
          <ChatbotCompanionSection />
          <HeroOpportunitiesSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
    </>
  );
}
