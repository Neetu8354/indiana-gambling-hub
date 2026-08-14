import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { posts } from "@/blog/posts";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const SITE = "https://yolo365admin.live";

// Lightweight markdown-ish renderer (## heading, paragraphs, - list, [text](url))
const renderContent = (md: string) => {
  const lines = md.trim().split("\n");
  const out: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let olBuffer: string[] = [];

  const flushUl = () => {
    if (!listBuffer.length) return;
    out.push(
      <ul key={`ul-${out.length}`} className="my-5 space-y-2 list-disc pl-6 text-foreground/85">
        {listBuffer.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />)}
      </ul>
    );
    listBuffer = [];
  };
  const flushOl = () => {
    if (!olBuffer.length) return;
    out.push(
      <ol key={`ol-${out.length}`} className="my-5 space-y-2 list-decimal pl-6 text-foreground/85">
        {olBuffer.map((it, i) => <li key={i} dangerouslySetInnerHTML={{ __html: inline(it) }} />)}
      </ol>
    );
    olBuffer = [];
  };

  const inline = (s: string) => s
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="px-1 py-0.5 rounded bg-muted text-foreground/90 text-[0.9em]">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:underline">$1</a>');

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, "");
    if (!line.trim()) { flushUl(); flushOl(); continue; }
    if (line.startsWith("## ")) {
      flushUl(); flushOl();
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      out.push(<h2 key={`h-${out.length}`} id={id} className="text-2xl md:text-3xl font-semibold tracking-tight mt-12 mb-4 scroll-mt-20">{text}</h2>);
      continue;
    }
    if (line.startsWith("> ")) {
      flushUl(); flushOl();
      out.push(<blockquote key={`q-${out.length}`} className="my-6 border-l-2 border-gold pl-5 py-1 italic text-foreground/80" dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />);
      continue;
    }
    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    if (ol) { flushUl(); olBuffer.push(ol[2]); continue; }
    if (line.startsWith("- ")) { flushOl(); listBuffer.push(line.slice(2)); continue; }
    flushUl(); flushOl();
    out.push(<p key={`p-${out.length}`} className="my-4 leading-[1.75] text-foreground/85" dangerouslySetInnerHTML={{ __html: inline(line) }} />);
  }
  flushUl(); flushOl();
  return out;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE}/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedShown = related.length ? related : fallback;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${SITE}${post.cover.replace("/src/assets", "/assets")}`],
    datePublished: post.date,
    dateModified: post.updated,
    author: { "@type": "Organization", name: "YOLO365", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "YOLO365",
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords,
    articleSection: post.category,
    inLanguage: "en-IN",
    wordCount: post.content.split(/\s+/).length,
  };

  const faqLd = post.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const ld = [articleLd, breadcrumbLd, ...(faqLd ? [faqLd] : [])];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${post.title} | YOLO365`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updated}
        keywords={post.keywords}
        jsonLd={ld}
      />
      <Header />
      <main className="container py-8 md:py-12 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-1">/</span>
          <Link to="/blog" className="hover:text-gold">Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        <Link to="/blog" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-gold mb-6">
          <ArrowLeft className="w-3 h-3" /> All articles
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider mb-4">
              <span className="text-gold">{post.category}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{post.readMinutes} min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5">{post.title}</h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </header>

          <figure className="rounded-lg overflow-hidden border hairline mb-10">
            <img src={post.cover} alt={`${post.title} — yolo365admin.live blog cover`} className="w-full h-auto" width={1200} height={675} loading="eager" decoding="async" />
          </figure>

          <div className="text-base">{renderContent(post.content)}</div>

          {post.faqs.length > 0 && (
            <section className="mt-14 pt-10 border-t hairline">
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Frequently asked questions</h2>
              <div className="space-y-5">
                {post.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-medium text-foreground mb-1.5">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <aside className="mt-14 p-6 md:p-8 rounded-lg border hairline bg-card/60 text-center">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">Get your YOLO365 ID in 60 seconds</h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">Apply everything in this guide on India's #1 cricket betting exchange. WhatsApp activation, instant INR deposits.</p>
            <button onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Get my ID on WhatsApp
            </button>
          </aside>
        </article>

        {relatedShown.length > 0 && (
          <section className="mt-16 pt-10 border-t hairline">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Related articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedShown.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden rounded-md border hairline mb-3">
                    <img src={r.cover} alt={`${r.title} — related YOLO365 cricket betting blog post`} loading="lazy" decoding="async" width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="text-[10px] text-gold uppercase tracking-wider mb-1">{r.category}</div>
                  <h3 className="text-sm font-semibold leading-snug group-hover:text-gold transition-colors">{r.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
