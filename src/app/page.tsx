import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ChaosSection from "@/components/landing/ChaosSection";
import ProblemSection from "@/components/landing/ProblemSection";
import VisionSection from "@/components/landing/VisionSection";
import PlatformSection from "@/components/landing/PlatformSection";
import MyWorkPreview from "@/components/landing/MyWorkPreview";
import Client360Preview from "@/components/landing/Client360Preview";
import WorkflowSection from "@/components/landing/WorkflowSection";
import LeadershipSection from "@/components/landing/LeadershipSection";
import HealthScoreSection from "@/components/landing/HealthScoreSection";
import AuditSection from "@/components/landing/AuditSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ManifestoSection from "@/components/landing/ManifestoSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <ChaosSection />
      <ProblemSection />
      <VisionSection />
      <PlatformSection />
      <MyWorkPreview />
      <Client360Preview />
      <WorkflowSection />
      <LeadershipSection />
      <HealthScoreSection />
      <AuditSection />
      <BeforeAfterSection />
      <ManifestoSection />
      <RoadmapSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
