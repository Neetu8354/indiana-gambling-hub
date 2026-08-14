import { openWhatsApp } from "@/lib/wa";

const PaymentMethods = () => {
  const methods = ["UPI", "PhonePe", "Google Pay", "Paytm", "IMPS", "Net Banking", "RTGS", "Bank Transfer"];
  return (
    <section className="container py-14">
      <div className="rounded-lg border hairline p-8 md:p-12 text-center bg-card/30">
        <div className="eyebrow mb-2">Indian payments</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Deposit and withdraw in <span className="text-gold">INR</span></h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">All major Indian payment methods supported, with zero transaction fees.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {methods.map((m) => (
            <button onClick={openWhatsApp} key={m} className="px-4 h-10 rounded-md border hairline text-sm font-medium text-foreground/85 hover:border-gold/50 hover:text-gold transition-colors">
              {m}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
