import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { posts, categories } from "@/blog/posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const SITE = "https://yolo365admin.live";

const Blog = () => {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => (cat === "All" ? posts : posts.filter((p) => p.category === cat)), [cat]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    name: "YOLO365 Blog — Cricket Betting, IPL Tips & Live Casino Strategy",
    url: `${SITE}/blog`,
    publisher: { "@type": "Organization", name: "YOLO365", url: SITE },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated,
      author: { "@type": "Organization", name: "YOLO365" },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="YOLO365 Blog — IPL Betting Tips, Cricket Strategy & Live Casino Guides 2026"
        description="Expert IPL 2026 betting tips, cricket strategy, Teen Patti & live casino guides from YOLO365 — India's #1 cricket betting exchange. New articles every week."
        canonical="/blog"
        keywords="cricket betting blog, IPL betting tips, teen patti strategy, live casino guide india, yolo365 blog"
        jsonLd={[jsonLd, breadcrumbLd]}
      />
      <Header />
      <main className="container py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-1">/</span> <span className="text-foreground">Blog</span>
        </nav>

        <header className="max-w-3xl mb-10">
          <div className="eyebrow mb-2">YOLO365 Insights</div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Cricket betting tips, <span className="text-gold">IPL strategy</span> & live casino guides
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Long-form, data-backed articles from India's #1 cricket betting exchange. Every guide is written by punters who actually bet — not affiliates.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 h-9 rounded-md text-sm font-medium border hairline transition-colors ${cat === c ? "bg-gold text-primary-foreground border-transparent" : "text-foreground/75 hover:text-gold hover:border-gold/40"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.slug} className="group border hairline rounded-lg overflow-hidden bg-card/40 hover:border-gold/40 transition-colors flex flex-col">
              <Link to={`/blog/${p.slug}`} className="block aspect-[16/9] overflow-hidden bg-muted">
                <img src={p.cover} alt={`${p.title} — YOLO365 cricket betting & live casino blog`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={640} height={360} />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
                  <span className="text-gold">{p.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(p.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.readMinutes} min</span>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mb-2 group-hover:text-gold transition-colors">
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
