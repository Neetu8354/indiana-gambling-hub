import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, Menu, X, User, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const nav: { label: string; href?: string }[] = [
    { label: "Cricket", href: "/games/cricket-betting" },
    { label: "Teen Patti", href: "/games/teen-patti" },
    { label: "Aviator", href: "/games/aviator" },
    { label: "Andar Bahar", href: "/games/andar-bahar" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b hairline">
      <div className="container flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2" aria-label="YOLO365 home">
          <div className="w-8 h-8 rounded-md bg-gold flex items-center justify-center font-bold text-base text-primary-foreground">
            Y
          </div>
          <div className="text-lg font-extrabold text-foreground tracking-tight leading-none">YOLO<span className="text-gold">365</span></div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) =>
            n.href ? (
              <Link
                key={n.label}
                to={n.href}
                className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-gold transition-colors"
              >
                {n.label}
              </Link>
            ) : (
              <button
                key={n.label}
                onClick={openWhatsApp}
                className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-gold transition-colors"
              >
                {n.label}
              </button>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={openWhatsApp} className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-md text-foreground/60 hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button onClick={openWhatsApp} className="hidden md:inline-flex items-center gap-2 px-4 h-9 rounded-md border hairline text-foreground/85 hover:text-gold hover:border-gold/40 text-sm font-medium transition-colors">
            <User className="w-4 h-4" /> Login
          </button>
          <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-4 h-9 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> Get ID
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground/80">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t hairline bg-background">
          <div className="container py-3 flex flex-col">
            {nav.map((n) =>
              n.href ? (
                <Link key={n.label} to={n.href} onClick={() => setOpen(false)} className="text-left py-2.5 text-sm font-medium text-foreground/80 hover:text-gold">
                  {n.label}
                </Link>
              ) : (
                <button key={n.label} onClick={openWhatsApp} className="text-left py-2.5 text-sm font-medium text-foreground/80 hover:text-gold">
                  {n.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
