import { Zap, Shield, Headphones, Wallet, Trophy, Lock } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const features = [
  { icon: Zap, title: "Instant deposits", desc: "UPI, PhonePe, GPay, Paytm and IMPS — funds credited in under 30 seconds." },
  { icon: Wallet, title: "5-minute withdrawals", desc: "Cash out any time directly to your Indian bank account." },
  { icon: Shield, title: "Bank-grade security", desc: "End-to-end encryption protects your data and your balance, always." },
  { icon: Headphones, title: "24/7 WhatsApp support", desc: "Real human assistance, in Hindi or English, around the clock." },
  { icon: Trophy, title: "Best cricket odds", desc: "Sharp pricing on IPL, T20, ODI and Test matches across the calendar." },
  { icon: Lock, title: "Private accounts", desc: "Get your ID on WhatsApp — no lengthy KYC, no friction." },
];

const Features = () => (
  <section className="container py-16">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <div className="eyebrow mb-2">Why Yolo365</div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Built for Indian players</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((f) => (
        <button onClick={openWhatsApp} key={f.title} className="card-premium rounded-lg p-6 text-left">
          <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4">
            <f.icon className="w-4.5 h-4.5" strokeWidth={1.75} />
          </div>
          <h3 className="font-semibold text-base mb-1.5 tracking-tight">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </button>
      ))}
    </div>
  </section>
);

export default Features;
