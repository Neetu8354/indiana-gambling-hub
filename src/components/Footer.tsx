import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { posts } from "@/blog/posts";

const Footer = () => {
  const cols: Record<string, { label: string; href?: string }[]> = {
    "Sports": [
      { label: "Cricket Betting", href: "/games/cricket-betting" },
      { label: "IPL 2026 Betting", href: "/blog/ipl-2026-betting-tips-yolo365" },
      { label: "Pro Kabaddi", href: "/blog/kabaddi-betting-yolo365-pro-kabaddi-league" },
      { label: "Tennis" },
      { label: "Horse Racing" },
      { label: "Esports" },
    ],
    "Casino": [
      { label: "Teen Patti", href: "/games/teen-patti" },
      { label: "Andar Bahar", href: "/games/andar-bahar" },
      { label: "Aviator", href: "/games/aviator" },
      { label: "Live Roulette", href: "/blog/online-roulette-india-strategy" },
      { label: "Dragon Tiger", href: "/blog/dragon-tiger-live-casino-india" },
      { label: "Slots" },
    ],
    "Company": [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "IPL Betting Tips", href: "/blog/ipl-2026-betting-tips-yolo365" },
      { label: "Get ID Guide", href: "/blog/how-to-get-yolo365-cricket-betting-id-whatsapp" },
      { label: "UPI Deposit Guide", href: "/blog/upi-deposit-betting-india-guide" },
    ],
  };

  const topPosts = posts.slice(0, 5);

  return (
    <footer className="border-t hairline bg-card/40 mt-12">
      <div className="container py-14">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="YOLO365 home">
              <div className="w-9 h-9 rounded-md bg-gold flex items-center justify-center font-bold text-lg text-primary-foreground">Y</div>
              <div className="leading-none">
                <div className="text-lg font-extrabold tracking-tight">YOLO<span className="text-gold">365</span></div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-5 max-w-sm leading-relaxed">India's trusted online cricket betting and live casino exchange. Get your IPL betting ID on WhatsApp in 60 seconds.</p>
            <div className="space-y-2 text-sm">
              <button onClick={openWhatsApp} className="flex items-center gap-2 text-foreground/85 hover:text-gold transition-colors">
                <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp support
              </button>
              <div className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4" /> Available 24/7</div>
              <div className="flex items-center gap-2 text-muted-foreground"><Mail className="w-4 h-4" /> support@yolo365.live</div>
            </div>
          </div>
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-foreground/90">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href ? (
                      <Link to={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</Link>
                    ) : (
                      <button onClick={openWhatsApp} className="text-sm text-muted-foreground hover:text-gold transition-colors text-left">{l.label}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO internal-link block */}
        <div className="pt-8 border-t hairline">
          <h4 className="font-semibold mb-4 text-xs tracking-[0.18em] uppercase text-foreground/90">Latest from the YOLO365 blog</h4>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
            {topPosts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 mt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-xs text-muted-foreground">© 2026 YOLO365. All rights reserved. Play responsibly. 18+ only.</div>
          <div className="flex gap-6 text-xs text-muted-foreground flex-wrap justify-center">
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Terms</button>
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Privacy</button>
            <button onClick={openWhatsApp} className="hover:text-gold transition-colors">Responsible Gaming</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
