import { openWhatsApp } from "@/lib/wa";
import { MessageCircle } from "lucide-react";

const steps = [
  { n: "01", t: "Request your ID", d: "Tap any 'Get ID' button to open WhatsApp instantly." },
  { n: "02", t: "Verify on chat", d: "Our team replies in under 60 seconds with credentials." },
  { n: "03", t: "Deposit in INR", d: "Add funds via UPI, PhonePe, GPay or any Indian payment method." },
  { n: "04", t: "Bet & withdraw", d: "Place bets across cricket and casino. Withdraw any time." },
];

const HowItWorks = () => (
  <section className="border-y hairline bg-card/30">
    <div className="container py-16">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="eyebrow mb-2">Get started</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Your account, ready in 60 seconds</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="card-premium rounded-lg p-6">
            <div className="text-xs font-medium text-gold tracking-widest mb-3">{s.n}</div>
            <h3 className="font-semibold text-base mb-1.5 tracking-tight">{s.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button onClick={openWhatsApp} className="inline-flex items-center gap-2 px-6 h-11 rounded-md bg-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" /> Start on WhatsApp
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
