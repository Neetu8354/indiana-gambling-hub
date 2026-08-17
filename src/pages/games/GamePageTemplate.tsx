import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { openWhatsApp } from "@/lib/wa";
import { CheckCircle2, MessageCircle } from "lucide-react";

const SITE = "https://yolo365admin.live";

export type GamePageProps = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  howToPlay: string[];
  strategyTitle: string;
  strategy: ReactNode;
  faqs: { q: string; a: string }[];
  relatedSlugs?: { slug: string; label: string }[];
  imageAlt: string;
  gameImage: string;
};

const GamePageTemplate = ({
  slug, title, description, keywords, h1, intro,
  highlights, howToPlay, strategyTitle, strategy, faqs, relatedSlugs = [], imageAlt, gameImage,
}: GamePageProps) => {
  const url = `${SITE}/games/${slug}`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Games", item: `${SITE}/games` },
        { "@type": "ListItem", position: 3, name: h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to play ${h1} on YOLO365`,
      step: howToPlay.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: `Step ${i + 1}`,
        text: s,
      })),
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO title={title} description={description} canonical={`/games/${slug}`} keywords={keywords} jsonLd={ld} image={`${SITE}/og-image.jpg`} />
      <Header />
      <main className="container py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span>
          <span className="text-foreground/60">Games</span> <span className="mx-2">/</span>
          <span className="text-foreground/80">{h1}</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
              <MessageCircle className="w-4 h-4" /> Get ID on WhatsApp
            </button>
            <Link to="/blog" className="inline-flex items-center px-6 h-12 rounded-md border hairline hover:border-gold/40 font-medium">Read tips</Link>
          </div>
          <img
            src={gameImage}
            alt={imageAlt}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
            className="mt-8 w-full rounded-xl border hairline"
          />
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Why play {h1} on YOLO365</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="p-6 rounded-xl border hairline bg-card/40">
                <CheckCircle2 className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">How to play {h1} on YOLO365</h2>
          <ol className="space-y-3 max-w-3xl">
            {howToPlay.map((s, i) => (
              <li key={i} className="flex gap-3 p-4 rounded-md border hairline bg-card/30">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-primary-foreground font-bold text-sm flex items-center justify-center">{i + 1}</span>
                <span className="text-foreground/85 text-sm leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">{strategyTitle}</h2>
          <div className="prose-invert text-foreground/85 leading-relaxed space-y-4 text-[15px]">{strategy}</div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((f) => (
              <details key={f.q} className="p-5 rounded-md border hairline bg-card/30 group">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedSlugs.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Explore more games</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedSlugs.map((r) => (
                <Link key={r.slug} to={`/games/${r.slug}`} className="p-5 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors">
                  <span className="text-sm font-medium">{r.label} →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-2xl border hairline bg-card/40 p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to play {h1}?</h2>
          <p className="text-muted-foreground mb-5">Get your YOLO365 ID on WhatsApp in 60 seconds — instant UPI deposit, 5-min withdrawal.</p>
          <button onClick={openWhatsApp} className="px-7 h-12 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90">
            Get ID on WhatsApp
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GamePageTemplate;
