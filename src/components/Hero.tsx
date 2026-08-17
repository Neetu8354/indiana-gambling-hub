import { openWhatsApp } from "@/lib/wa";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="relative h-[70vh] min-h-[460px] max-h-[780px] sm:h-[75vh] md:h-[78vh]">
        <img
          src="/hero-cricket.jpg"
          alt="Live online cricket betting on yolo365admin.live — IPL 2026, T20 and ODI matches"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

        <div className="container relative z-10 h-full flex flex-col justify-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[68px] font-semibold leading-[1.05] mb-4 sm:mb-5 tracking-tight">
            India's most trusted<br className="hidden sm:block" />{" "}
            <span className="text-gold font-semibold">cricket betting</span> exchange
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl leading-relaxed">
            Bet on every IPL match, international cricket, kabaddi and live casino. Instant INR deposits and 5-minute withdrawals — managed entirely on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <button onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <MessageCircle className="w-4 h-4" /> Get your ID on WhatsApp
            </button>
            <button onClick={openWhatsApp} className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-md border hairline text-foreground hover:border-gold/50 hover:text-gold font-medium text-sm transition-colors">
              View promotions <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 sm:mt-10 inline-flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground self-start">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            Licensed · Encrypted · Trusted by 1M+ Indian players
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t hairline bg-card/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x hairline">
          {[
            ["1M+", "Active players"],
            ["₹100Cr+", "Paid out in 2025"],
            ["24/7", "WhatsApp support"],
            ["60s", "ID activation"],
          ].map(([n, l]) => (
            <div key={l} className="py-5 px-4 text-center md:text-left">
              <div className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{n}</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
