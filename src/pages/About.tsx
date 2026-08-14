import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp } from "@/lib/wa";
import { ShieldCheck, Award, Users, Zap, Lock, HeartHandshake } from "lucide-react";

const SITE = "https://yolo365admin.live";

const About = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: "About YOLO365 — India's Trusted Online Cricket Betting Exchange",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
      ],
    },
  ];

  const values = [
    { icon: ShieldCheck, title: "Licensed & Regulated", desc: "Operating under Curaçao eGaming license with full KYC compliance for Indian players." },
    { icon: Zap, title: "60-Second ID Activation", desc: "WhatsApp-first onboarding — fastest cricket betting ID delivery in India." },
    { icon: Lock, title: "256-bit SSL Security", desc: "Bank-grade encryption protects every deposit, withdrawal, and personal detail." },
    { icon: HeartHandshake, title: "Responsible Gaming", desc: "Self-exclusion, deposit limits, and 18+ verification on every account." },
    { icon: Award, title: "1000+ Provider Games", desc: "Evolution, Ezugi, Pragmatic Play, Spribe, Betsoft and 50+ more studios." },
    { icon: Users, title: "5 Lakh+ Active Users", desc: "India's fastest-growing cricket betting community since 2021." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site"
        description="Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated."
        canonical="/about"
        keywords="about YOLO365, YOLO365 review, trusted cricket betting site India, licensed online betting India, YOLO365 company"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <a href="/" className="hover:text-gold">Home</a> <span className="mx-2">/</span> <span className="text-foreground/80">About</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About <span className="text-gold">YOLO365</span></h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">
          YOLO365 is India's most trusted online cricket betting exchange and live casino platform. Since 2021, we've helped over 5 lakh Indian players get a verified cricket betting ID on WhatsApp in under 60 seconds — with instant UPI deposits, 5-minute withdrawals, and 24×7 Hindi support.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-foreground/80 leading-relaxed max-w-3xl">
            To make online cricket betting in India safe, fast, and fair. We built YOLO365 because Indian punters deserved a platform that speaks their language — Hindi support, INR-native UPI, and a WhatsApp-first experience that doesn't force you through endless KYC forms before placing your first bet on IPL or BBL.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why 5 Lakh+ Indians Trust YOLO365</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors">
                <v.icon className="w-7 h-7 text-gold mb-3" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">YOLO365 by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { n: "5L+", l: "Active Users" },
              { n: "60s", l: "ID Activation" },
              { n: "5 min", l: "Withdrawals" },
              { n: "1000+", l: "Casino Games" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-xl border hairline bg-card/40 text-center">
                <div className="text-3xl font-extrabold text-gold">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border hairline bg-card/40 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to join India's #1 cricket betting community?</h2>
          <p className="text-muted-foreground mb-6">Get your YOLO365 betting ID on WhatsApp in 60 seconds.</p>
          <button onClick={openWhatsApp} className="px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Get ID on WhatsApp
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
