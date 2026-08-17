import { openWhatsApp } from "@/lib/wa";

const sports = [
  { img: "/sport-cricket.jpg", name: "Cricket", alt: "Bet on live cricket — IPL 2026 and international matches on yolo365admin.live", tag: "IPL 2026 · International", live: 42 },
  { img: "/sport-kabaddi.jpg", name: "Kabaddi", alt: "Pro Kabaddi League online betting on yolo365admin.live", tag: "Pro Kabaddi League", live: 8 },
  { img: "/sport-tennis.jpg", name: "Tennis", alt: "Live tennis betting — ATP, WTA and Grand Slam odds on yolo365admin.live", tag: "ATP · WTA · Grand Slam", live: 15 },
  { img: "/sport-horse.jpg", name: "Horse Racing", alt: "Indian Derby horse racing online betting on yolo365admin.live", tag: "Indian Derby", live: 12 },
  { img: "/sport-esports.jpg", name: "Esports", alt: "Esports betting — BGMI, Valorant, CS2 live odds on yolo365admin.live", tag: "BGMI · Valorant · CS2", live: 24 },
  { img: "/sport-basketball.jpg", name: "Basketball", alt: "NBA and Indian basketball league online betting on yolo365admin.live", tag: "NBA · Indian League", live: 9 },
];

const SportsSection = () => (
  <section className="container py-16">
    <div className="flex items-end justify-between mb-8">
      <div>
        <div className="eyebrow mb-2">Sports betting</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Markets across every major sport</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-xl">Industry-leading odds in INR on cricket, kabaddi, tennis, esports and more.</p>
      </div>
      <button onClick={openWhatsApp} className="hidden md:inline-flex text-sm text-foreground/70 hover:text-gold transition-colors">All sports →</button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {sports.map((s) => (
        <button key={s.name} onClick={openWhatsApp} className="card-premium rounded-lg overflow-hidden text-left group">
          <div className="aspect-square overflow-hidden relative">
            <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width={400} height={400} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-background/80 backdrop-blur border hairline text-[10px] font-medium text-foreground/90 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-secondary" /> {s.live} live
            </div>
          </div>
          <div className="p-3">
            <div className="font-medium text-sm text-foreground">{s.name}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{s.tag}</div>
          </div>
        </button>
      ))}
    </div>
  </section>
);

export default SportsSection;
