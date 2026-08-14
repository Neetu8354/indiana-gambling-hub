import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const CTABanner = () => (
  <section className="container py-16">
    <div className="relative rounded-lg overflow-hidden border hairline bg-card/40 p-10 md:p-16 text-center">
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--gold)) 0%, transparent 60%)" }} />
      <div className="relative max-w-2xl mx-auto">
        <div className="eyebrow mb-3">Ready when you are</div>
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">Open your <span className="text-gold">Yolo365</span> account today</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8">Join over a million Indian players betting on IPL, cricket and live casino. Free ID on WhatsApp in under 60 seconds.</p>
        <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-12 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" /> Get free ID on WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;
