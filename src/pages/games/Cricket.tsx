import GamePageTemplate from "./GamePageTemplate";
import cricketImage from "@/assets/sport-cricket.jpg";

const Cricket = () => (
  <GamePageTemplate
    slug="cricket-betting"
    title="Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365"
    description="Bet on live cricket matches at YOLO365 — IPL 2026, T20 World Cup, BBL, PSL with best odds, in-play markets, instant UPI deposit & 5-minute withdrawal."
    keywords="online cricket betting India, IPL 2026 betting, live cricket betting site, cricket betting ID WhatsApp, T20 World Cup odds, cricket exchange India"
    h1="Online Cricket Betting on YOLO365"
    intro="YOLO365 is India's #1 online cricket betting exchange. Bet live on IPL 2026, T20 World Cup, BBL, PSL, and every international series — with the sharpest odds, in-play markets every ball, and a verified cricket betting ID delivered on WhatsApp in 60 seconds."
    imageAlt="Online cricket betting on yolo365admin.live with IPL 2026 live odds"
    gameImage={cricketImage}
    highlights={[
      { title: "Best IPL 2026 odds", desc: "Match-winner, top batsman, top bowler, over/under, and 50+ in-play markets every over." },
      { title: "Live in-play betting", desc: "Bet ball-by-ball with real-time odds across every major T20, ODI, and Test match." },
      { title: "₹100 minimum bet", desc: "Start small with INR-native UPI deposits and scale to high-roller stakes." },
    ]}
    howToPlay={[
      "Message us on WhatsApp to get your YOLO365 cricket betting ID in 60 seconds.",
      "Deposit instantly using UPI (PhonePe, GPay, Paytm) — minimum ₹100.",
      "Open the Cricket section, pick your match (IPL, BBL, international, etc.).",
      "Choose a market — match winner, top batsman, session runs, or in-play.",
      "Place your bet at the displayed odds and watch live.",
      "Withdraw winnings to your bank account in under 5 minutes.",
    ]}
    strategyTitle="Cricket betting strategy that actually works"
    strategy={
      <>
        <p>The most consistent winners on <strong>YOLO365 cricket betting</strong> follow three rules: bet only on leagues you watch, never stake more than 2% of your bankroll on a single match, and shop the line — our exchange odds are typically 5–8% sharper than book prices.</p>
        <p>For <strong>IPL 2026 betting</strong>, focus on toss + first-innings totals on dew-affected venues like Chennai and Mumbai. For Test cricket, session markets (runs in next 10 overs) offer better edge than full match-winner. In T20 World Cup matches, top-batsman markets on openers consistently beat random selection.</p>
        <p>Use our <a href="/blog/cricket-betting-bankroll-management-india" className="text-gold underline">bankroll management guide</a> and the <a href="/blog/ipl-2026-betting-tips-yolo365" className="text-gold underline">IPL 2026 tips</a> blog to sharpen your edge before every match.</p>
      </>
    }
    faqs={[
      { q: "Is online cricket betting legal in India?", a: "Skill-based betting on offshore exchanges like YOLO365 operates in a grey area in India. We hold a Curaçao eGaming license and accept Indian players, but you should check your state laws — some states (Telangana, AP, Tamil Nadu) restrict online gambling." },
      { q: "How fast is withdrawal on YOLO365?", a: "UPI and IMPS withdrawals are processed in under 5 minutes during business hours. Bank transfers above ₹50,000 may take up to 30 minutes." },
      { q: "What's the minimum deposit for cricket betting?", a: "₹100 via UPI. We accept PhonePe, GPay, Paytm, BHIM, and direct bank transfer." },
      { q: "Can I bet live during the match?", a: "Yes. YOLO365 offers in-play markets that update every ball — match-winner, next-over runs, top batsman, and 50+ session markets." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "andar-bahar", label: "Andar Bahar" },
      { slug: "aviator", label: "Aviator Crash" },
    ]}
  />
);
export default Cricket;
