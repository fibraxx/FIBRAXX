import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlansSection } from "@/components/plans-section"
import { CoverageSection } from "@/components/coverage-section"
import { CompanySection } from "@/components/company-section"
import { SupportSection } from "@/components/support-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PlansSection />
      <CoverageSection />
      <CompanySection />
      <SupportSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
