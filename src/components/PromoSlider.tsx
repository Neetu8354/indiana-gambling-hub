import { useEffect, useState } from "react";
import promoCasino from "@/assets/promo-casino.jpg";
import promoWelcome from "@/assets/promo-welcome.jpg";
import promoIpl from "@/assets/promo-ipl.jpg";
import { openWhatsApp } from "@/lib/wa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: promoIpl, alt: "IPL 2026 cricket betting bonus on yolo365admin.live — match-day mega offer", eyebrow: "IPL 2026", title: "Match-day mega bonus", sub: "Bet ₹1,000 and receive an additional ₹2,000 in bonus credits.", cta: "Claim offer" },
  { img: promoWelcome, alt: "200% welcome bonus for new players on yolo365admin.live cricket betting site", eyebrow: "New players", title: "200% welcome bonus", sub: "Up to ₹15,000 matched on your first deposit. T&Cs apply.", cta: "Get bonus" },
  { img: promoCasino, alt: "VIP live casino tables — Teen Patti, Andar Bahar, Roulette on yolo365admin.live", eyebrow: "Live casino", title: "VIP table access", sub: "Teen Patti, Andar Bahar and Roulette with dedicated dealers.", cta: "Play live" },
];

const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container py-10">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="eyebrow mb-1">Featured</div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Current promotions</h2>
        </div>
        <button onClick={openWhatsApp} className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">View all →</button>
      </div>
      <div className="relative rounded-lg overflow-hidden border hairline">
        <div className="relative aspect-[21/9] md:aspect-[24/8]">
          {slides.map((s, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}>
              <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" width={1920} height={720} />
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-xl">
                <div className="eyebrow mb-2">{s.eyebrow}</div>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-md">{s.sub}</p>
                <button onClick={openWhatsApp} className="self-start px-5 h-10 rounded-md bg-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
                  {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setI((i - 1 + slides.length) % slides.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => setI((i + 1) % slides.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 border hairline flex items-center justify-center text-foreground/80 hover:text-gold backdrop-blur transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-1 rounded-full transition-all ${i === idx ? "w-6 bg-gold" : "w-1.5 bg-foreground/30"}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSlider;
