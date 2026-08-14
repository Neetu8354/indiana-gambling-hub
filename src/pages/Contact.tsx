import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp, WHATSAPP_LINK } from "@/lib/wa";
import { MessageCircle, Mail, Clock, Globe2 } from "lucide-react";

const SITE = "https://yolo365admin.live";

const Contact = () => {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${SITE}/contact#webpage`,
      url: `${SITE}/contact`,
      name: "Contact YOLO365 — 24×7 WhatsApp Support",
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "YOLO365",
      url: SITE,
      email: "support@yolo365.live",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
          areaServed: "IN",
          contactOption: "TollFree",
          url: WHATSAPP_LINK,
        },
      ],
    },
  ];

  const channels = [
    { icon: MessageCircle, title: "WhatsApp (fastest)", value: "Tap to chat — replies in <60s", action: openWhatsApp, cta: "Open WhatsApp" },
    { icon: Mail, title: "Email", value: "support@yolo365.live", href: "mailto:support@yolo365.live", cta: "Send Email" },
    { icon: Clock, title: "Hours", value: "24×7 — every day of the year", cta: "" },
    { icon: Globe2, title: "Languages", value: "English & Hindi (हिन्दी)", cta: "" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact YOLO365 — 24×7 WhatsApp Support for Cricket Betting ID"
        description="Contact YOLO365 customer support 24×7 on WhatsApp for cricket betting ID, deposit, withdrawal, or live casino help. Hindi & English support."
        canonical="/contact"
        keywords="contact YOLO365, YOLO365 customer support, YOLO365 WhatsApp number, YOLO365 helpline India"
        jsonLd={ld}
      />
      <Header />
      <main className="container py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <a href="/" className="hover:text-gold">Home</a> <span className="mx-2">/</span> <span className="text-foreground/80">Contact</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact <span className="text-gold">YOLO365</span></h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          24×7 customer support for cricket betting ID, deposits, withdrawals, and live casino queries. WhatsApp is the fastest channel — average reply in 60 seconds.
        </p>

        <section className="grid md:grid-cols-2 gap-5 mb-12">
          {channels.map((c) => (
            <div key={c.title} className="p-6 rounded-xl border hairline bg-card/40">
              <c.icon className="w-7 h-7 text-gold mb-3" />
              <h2 className="font-semibold mb-1 text-lg">{c.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{c.value}</p>
              {c.cta && (
                c.action ? (
                  <button onClick={c.action} className="px-5 h-10 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90">{c.cta}</button>
                ) : (
                  <a href={c.href} className="inline-flex px-5 h-10 items-center rounded-md border hairline hover:border-gold/40 text-sm font-medium">{c.cta}</a>
                )
              )}
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What can we help with?</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground/80">
            {[
              "Get a new YOLO365 cricket betting ID",
              "UPI deposit not credited",
              "Withdrawal status & timelines",
              "IPL 2026 odds & market questions",
              "Live casino game rules (Teen Patti, Andar Bahar)",
              "KYC and account verification",
              "Bonus & promotion claims",
              "Responsible gaming & self-exclusion",
            ].map((q) => (
              <li key={q} className="p-4 rounded-md border hairline bg-card/30">• {q}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border hairline bg-card/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Need help right now?</h2>
          <p className="text-muted-foreground text-sm mb-5">Our team is online 24×7 on WhatsApp.</p>
          <button onClick={openWhatsApp} className="px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
            Chat on WhatsApp
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
