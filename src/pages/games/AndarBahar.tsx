import GamePageTemplate from "./GamePageTemplate";

const AndarBahar = () => (
  <GamePageTemplate
    slug="andar-bahar"
    title="Andar Bahar Online Real Money India | YOLO365 Live Casino"
    description="Play Andar Bahar online for real INR money on YOLO365 — live Indian dealers, ₹100 min bet, side bets up to 120×, instant UPI deposit & 5-min withdrawal."
    keywords="Andar Bahar online real money, Andar Bahar live India, Katti game online, Andar Bahar UPI, live Andar Bahar YOLO365, AB game real money"
    h1="Andar Bahar Online Live — Real Money"
    intro="Play the classic Indian game Andar Bahar online for real money on YOLO365. Live dealers from Ezugi and Evolution stream 24×7, ₹100 minimum bet, side bets paying up to 120×, and instant UPI deposit + 5-minute withdrawal."
    imageAlt="Andar Bahar online real money game on yolo365admin.live with live Indian dealer"
    gameImage="/casino-andarbahar.jpg"
    highlights={[
      { title: "Live Indian dealers", desc: "24×7 Hindi-speaking dealers from Ezugi & Evolution licensed studios." },
      { title: "Side bets up to 120×", desc: "First card, suit match, and total cards side bets boost your edge." },
      { title: "₹100 to ₹5 lakh stakes", desc: "Tables for casual punters and high-rollers with scalable limits." },
    ]}
    howToPlay={[
      "Get your YOLO365 ID on WhatsApp (60s).",
      "Deposit ₹100+ via UPI — instant credit.",
      "Open Live Casino → Andar Bahar.",
      "Place your bet on Andar (left) or Bahar (right).",
      "Dealer reveals the Joker card — cards are dealt alternately to Andar and Bahar.",
      "First side to match the Joker wins. Bahar pays slightly higher.",
    ]}
    strategyTitle="Andar Bahar strategy: the side-bet edge"
    strategy={
      <>
        <p>The main <strong>Andar Bahar bet</strong> has near 50/50 odds with a tiny house edge — Bahar pays 1:1 and Andar pays slightly less. The real edge is in side bets: the "First 3 Cards" bet pays up to 120× when the Joker matches in the first 3 deals.</p>
        <p>Smart players bet 80% of their stake on the main game and 20% on a single side bet — this preserves bankroll while capturing the rare 120× hit. Avoid the "Total cards over/under" bet on most tables — it carries the highest house edge (~6%).</p>
        <p>Read our full <a href="/blog/andar-bahar-online-strategy-india" className="text-gold underline">Andar Bahar strategy guide</a> for table-by-table side-bet expected value.</p>
      </>
    }
    faqs={[
      { q: "Is Andar Bahar legal to play online in India?", a: "Andar Bahar is a traditional Indian card game widely played online via offshore licensed casinos like YOLO365. Check your state laws — some states restrict online gambling." },
      { q: "What's the difference between Andar and Bahar?", a: "Andar (left) is dealt first and pays slightly less. Bahar (right) is dealt second and pays 1:1. The Joker card determines which side wins." },
      { q: "Can I play Andar Bahar in INR?", a: "Yes. Deposit and withdraw in INR via UPI, IMPS, or NEFT. Minimum bet ₹100, maximum ₹5 lakh per hand on VIP tables." },
      { q: "Are the live dealers Indian?", a: "Yes. YOLO365 partners with Ezugi and Evolution to stream Andar Bahar with Hindi-speaking Indian dealers 24×7." },
    ]}
    relatedSlugs={[
      { slug: "teen-patti", label: "Teen Patti Live" },
      { slug: "aviator", label: "Aviator Crash" },
      { slug: "cricket-betting", label: "Cricket Betting" },
    ]}
  />
);
export default AndarBahar;
