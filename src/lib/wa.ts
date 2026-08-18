export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=919282133673&text=I%20WANT%20NEW%20ID!";

type WAOptions = { source?: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const w = window as any;

// Accepts either an options object OR a React MouseEvent (so it can be passed
// directly as an onClick handler without TS errors).
export const openWhatsApp = (arg?: WAOptions | unknown) => {
  const source =
    arg && typeof arg === "object" && "source" in (arg as WAOptions)
      ? (arg as WAOptions).source || "unknown"
      : "unknown";

  // GA4 / GTM event
  if (typeof w.gtag === "function") {
    w.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: source,
      value: 1,
    });
  }
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: "whatsapp_click", source });
  }

  // Meta Pixel — Lead conversion
  if (typeof w.fbq === "function") {
    w.fbq("track", "Lead", { content_name: "WhatsApp ID Request", source });
  }

  window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
};
