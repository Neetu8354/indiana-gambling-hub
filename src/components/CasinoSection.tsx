import roulette from "@/assets/casino-roulette.jpg";
import andarbahar from "@/assets/casino-andarbahar.jpg";
import teenpatti from "@/assets/casino-teenpatti.jpg";
import blackjack from "@/assets/casino-blackjack.jpg";
import slots from "@/assets/casino-slots.jpg";
import dragontiger from "@/assets/casino-dragontiger.jpg";
import { openWhatsApp } from "@/lib/wa";

const games = [
  { img: teenpatti, name: "Teen Patti", alt: "Play Teen Patti online real money live on yolo365admin.live", tag: "Indian classic", min: "₹100" },
  { img: andarbahar, name: "Andar Bahar", alt: "Andar Bahar online live casino with Indian dealers on yolo365admin.live", tag: "Live dealer", min: "₹50" },
  { img: roulette, name: "Roulette", alt: "Live European roulette online real money on yolo365admin.live", tag: "European · Auto", min: "₹100" },
  { img: dragontiger, name: "Dragon Tiger", alt: "Dragon Tiger live casino card game on yolo365admin.live", tag: "Quick cards", min: "₹50" },
  { img: blackjack, name: "Blackjack", alt: "Live blackjack 21 online real money tables on yolo365admin.live", tag: "21 live tables", min: "₹200" },
  { img: slots, name: "Lucky 777 Slots", alt: "1000+ online slots — Lucky 777 jackpot games on yolo365admin.live", tag: "1,000+ slots", min: "₹10" },
];

const CasinoSection = () => (
  <section className="border-y hairline bg-card/30">
    <div className="container py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="eyebrow mb-2">Live casino</div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Authentic Indian casino experience</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl">Real dealers and real cash on Teen Patti, Andar Bahar, Roulette and more.</p>
        </div>
        <button onClick={openWhatsApp} className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">All games →</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {games.map((g) => (
          <button key={g.name} onClick={openWhatsApp} className="card-premium rounded-lg overflow-hidden text-left group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={g.img} alt={g.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={300} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-semibold text-base text-foreground">{g.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{g.tag}</div>
                </div>
                <div className="text-[10px] px-2 py-0.5 rounded border border-gold/40 text-gold font-medium bg-background/60 backdrop-blur">Min {g.min}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="text-center mt-8">
        <button onClick={openWhatsApp} className="px-6 h-11 rounded-md border hairline text-foreground hover:border-gold/50 hover:text-gold font-medium text-sm transition-colors">
          Browse all 1,000+ games
        </button>
      </div>
    </div>
  </section>
);

export default CasinoSection;
