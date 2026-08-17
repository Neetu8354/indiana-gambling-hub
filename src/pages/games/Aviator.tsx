import GamePageTemplate from "./GamePageTemplate";
import aviatorImage from "@/assets/casino-slots.jpg";

const Aviator = () => (
  <GamePageTemplate
    slug="aviator"
    title="Aviator Game Online India — Play Real Money Crash on YOLO365"
    description="Play Aviator crash game online for real INR money on YOLO365 — Spribe original, 97% RTP, ₹10 min bet, auto cashout, instant UPI deposit & withdrawal."
    keywords="Aviator game online India, Aviator real money, Spribe Aviator, Aviator crash game, Aviator UPI deposit, how to win Aviator YOLO365"
    h1="Aviator Crash Game — Real Money Online"
    intro="Play the original Aviator crash game by Spribe on YOLO365 for real INR money. 97% RTP, ₹10 minimum bet, dual-bet auto cashout, provably fair — and the fastest growing crash game in India with thousands of players in every round."
    imageAlt="Aviator crash game online real money on yolo365admin.live with multiplier curve"
    gameImage={aviatorImage}
    highlights={[
      { title: "97% RTP — provably fair", desc: "Highest-payout crash game in India with verifiable round results." },
      { title: "₹10 minimum bet", desc: "Start with as little as ₹10 — perfect for learning the rhythm." },
      { title: "Dual bet + auto cashout", desc: "Run two bets per round with separate auto-cashout multipliers." },
    ]}
    howToPlay={[
      "Get your YOLO365 ID on WhatsApp in 60 seconds.",
      "Deposit ₹100+ via UPI for instant credit.",
      "Open Casino → Spribe → Aviator.",
      "Set your bet amount (₹10 to ₹1 lakh) and optional auto-cashout multiplier.",
      "Plane takes off — multiplier rises from 1.00× upward.",
      "Cash out before the plane flies away to lock in winnings.",
    ]}
    strategyTitle="How to win Aviator: the 1.5× strategy"
    strategy={
      <>
        <p>The most consistent <strong>Aviator strategy</strong> is the 1.5× auto-cashout: set both bets to auto-cashout at 1.5× and you win 67% of rounds for a small but steady profit curve. Mathematically it's near-breakeven, but combined with bonus rounds and YOLO365 cashback it edges into positive expected value.</p>
        <p>Aggressive players use the "Martingale-lite" — double stake after every loss, reset after a 2× cashout. It works in short sessions but blows up in long droughts, so cap your loss streak at 5 doubles maximum.</p>
        <p>Never chase a high multiplier — the plane crashes randomly and 100×+ rounds happen less than 1% of the time. Set your auto-cashout, walk away from the screen, and let the math work.</p>
      </>
    }
    faqs={[
      { q: "Is Aviator rigged?", a: "No. Aviator by Spribe uses provably fair cryptographic verification — every round seed is publishable and verifiable. RTP is independently audited at 97%." },
      { q: "What's the maximum win on Aviator?", a: "The multiplier is theoretically uncapped but the maximum payout per bet is ₹1 crore on YOLO365." },
      { q: "Can I play Aviator on mobile?", a: "Yes. Aviator runs in your mobile browser — no app download needed. Works on Android and iOS." },
      { q: "What's the best Aviator bet size?", a: "Never stake more than 1% of your bankroll per round. With auto-cashout at 1.5×, even ₹100 bets compound steadily over 100+ rounds." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "andar-bahar", label: "Andar Bahar" },
      { slug: "cricket-betting", label: "Cricket Betting" },
    ]}
  />
);
export default Aviator;
