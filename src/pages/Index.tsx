import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import TickerBar from "@/components/TickerBar";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

// Above-the-fold loads eagerly; below-the-fold sections are lazy-split for faster LCP.
const PromoSlider = lazy(() => import("@/components/PromoSlider"));
const SportsSection = lazy(() => import("@/components/SportsSection"));
const CasinoSection = lazy(() => import("@/components/CasinoSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Features = lazy(() => import("@/components/Features"));
const PaymentMethods = lazy(() => import("@/components/PaymentMethods"));
const Providers = lazy(() => import("@/components/Providers"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppChatbot = lazy(() => import("@/components/WhatsAppChatbot"));

const SITE = "https://yolo365admin.live";

const Index = () => {
  const homeLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: SITE,
    name: "YOLO365 — India's #1 Online Cricket Betting ID & Live Casino",
    isPartOf: { "@id": `${SITE}/#website` },
    inLanguage: "en-IN",
    about: { "@id": `${SITE}/#organization` },
    description:
      "YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds.",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 — India's #1 Online Cricket Betting ID, IPL & Live Casino 2026"
        description="YOLO365 is India's most trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds, instant INR deposits, 5-minute withdrawals, live Teen Patti, Andar Bahar & 1000+ casino games."
        canonical="/"
        keywords="YOLO365, online cricket betting India, IPL 2026 betting ID, live casino India, Teen Patti online, Andar Bahar real money, kabaddi betting, instant withdrawal betting"
        jsonLd={homeLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <PromoSlider />
          <SportsSection />
          <CasinoSection />
          <HowItWorks />
          <Features />
          <PaymentMethods />
          <Providers />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppChatbot />
      </Suspense>
    </div>
  );
};

export default Index;
