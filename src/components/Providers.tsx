import { openWhatsApp } from "@/lib/wa";

const providers = ["EVOLUTION", "PRAGMATIC", "EZUGI", "SUPERSPADE", "BETGAMES", "PLAYTECH", "MICROGAMING", "NETENT", "RED TIGER", "HOTROAD"];

const Providers = () => (
  <section className="py-10 border-y hairline bg-card/40 overflow-hidden">
    <div className="container mb-5 text-center">
      <div className="eyebrow">Trusted game providers</div>
    </div>
    <div className="relative">
      <div className="flex gap-14 marquee whitespace-nowrap">
        {[...providers, ...providers].map((p, i) => (
          <button key={i} onClick={openWhatsApp} className="text-sm md:text-base font-semibold text-muted-foreground/60 hover:text-gold transition-colors tracking-[0.2em]">
            {p}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Providers;
