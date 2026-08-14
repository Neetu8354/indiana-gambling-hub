import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { openWhatsApp } from "@/lib/wa";

const WhatsAppChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] max-w-[calc(100vw-2.5rem)] rounded-xl overflow-hidden border hairline bg-card shadow-2xl">
          <div className="bg-whatsapp p-4 flex items-center gap-3 text-white">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center font-bold text-sm">Y</div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Yolo365 Support</div>
              <div className="text-[11px] flex items-center gap-1.5 text-white/85"><span className="w-1.5 h-1.5 rounded-full bg-green-300" /> Online · Replies in ~30s</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
          <div className="p-4 space-y-2.5 bg-muted/30">
            <div className="bg-card border hairline rounded-xl rounded-tl-sm p-3 text-sm max-w-[88%] text-foreground/90">
              Hi! Welcome to Yolo365. Get your free betting ID in under 60 seconds.
            </div>
            <div className="bg-card border hairline rounded-xl rounded-tl-sm p-3 text-sm max-w-[88%] text-foreground/90">
              Bet on IPL, cricket, kabaddi and live casino with instant INR deposits.
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Get my ID", "IPL betting", "Casino games", "Bonus offers"].map((q) => (
                <button key={q} onClick={openWhatsApp} className="text-[11px] px-2.5 py-1 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
          <button onClick={openWhatsApp} className="w-full bg-whatsapp text-white py-3 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> Continue on WhatsApp
          </button>
        </div>
      )}

      {!open && showBubble && (
        <button onClick={() => setOpen(true)} className="bg-card border hairline rounded-xl rounded-br-sm px-3.5 py-2 text-left shadow-lg max-w-[240px] hover:border-gold/40 transition-colors">
          <div className="font-medium text-sm text-foreground">Need help getting your ID?</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Chat with us on WhatsApp</div>
        </button>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-xl animate-pulse-wa hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppChatbot;
