// Blog post data — SEO-optimized long-form articles for YOLO365
// Each post is targeted at high-intent India betting keywords.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  updated: string;
  readMinutes: number;
  category: "Cricket" | "IPL" | "Casino" | "Guide" | "Strategy" | "News";
  cover: string;
  excerpt: string;
  /** Markdown-ish content rendered by Article.tsx (## headings, paragraphs, - lists) */
  content: string;
  faqs: { q: string; a: string }[];
};

const cricketImg = "/sport-cricket.jpg";
const heroImg = "/hero-cricket.jpg";
const teenpattiImg = "/casino-teenpatti.jpg";
const abImg = "/casino-andarbahar.jpg";
const rouletteImg = "/casino-roulette.jpg";
const dtImg = "/casino-dragontiger.jpg";
const blackjackImg = "/casino-blackjack.jpg";
const kabaddiImg = "/sport-kabaddi.jpg";

export const posts: BlogPost[] = [
  {
    slug: "how-to-get-yolo365-cricket-betting-id-whatsapp",
    title: "How to Get a YOLO365 Cricket Betting ID on WhatsApp in 60 Seconds (2026 Guide)",
    description: "Step-by-step 2026 guide to getting your YOLO365 cricket betting ID on WhatsApp. Instant activation, INR deposits, IPL betting and live casino access.",
    keywords: "yolo365 id, cricket betting id whatsapp, online betting id india, how to get betting id, yolo 365 register",
    date: "2026-04-12",
    updated: "2026-05-01",
    readMinutes: 7,
    category: "Guide",
    cover: heroImg,
    excerpt: "The fastest way to start betting on IPL 2026 in India — get your YOLO365 ID on WhatsApp in under a minute, with no forms, no KYC delays and zero deposit fees.",
    content: `
## Why YOLO365 is India's #1 cricket betting ID provider in 2026

If you have ever tried to register on a foreign betting site, you already know the pain — long forms, document uploads, OTP loops, currency conversion fees and a 24-hour "verification" wait. YOLO365 was built specifically for the Indian market to remove every one of those friction points. You message a real human on WhatsApp, you get a username and password, you deposit via UPI, and you bet. The entire flow takes less than a minute on a typical 4G connection.

This guide walks you through the exact steps, what to expect, what NOT to do, and how to claim the welcome bonus most players miss.

## Step 1 — Open WhatsApp from yolo365admin.live

On the [YOLO365 homepage](/), tap any of the gold "Get ID" buttons. The button opens WhatsApp directly with our verified support number pre-loaded. You do not need to save any number to your phone book.

If you are on a desktop, the button opens WhatsApp Web; on mobile it jumps straight into the app.

## Step 2 — Send the pre-filled message

A message is auto-typed for you — something like *"Hi, I'd like to get a YOLO365 ID."*. Just hit send. Our team replies within 30-60 seconds, 24 hours a day, even at 3am during a Test match in Australia.

## Step 3 — Receive your username + password

You'll receive:

- A unique username
- A temporary password (change it after first login)
- The login URL
- A short list of supported deposit methods (UPI, PhonePe, GPay, Paytm, IMPS, net banking)

## Step 4 — Deposit (minimum ₹100)

The minimum deposit on YOLO365 is just ₹100, which is the lowest in the Indian market. UPI deposits credit instantly. There are no deposit fees and no hidden charges.

## Step 5 — Claim your welcome bonus

Most new players forget this step. Reply to the WhatsApp chat with the word **"BONUS"** within 10 minutes of your first deposit and our team will credit your welcome promo manually. This is not advertised on the site so it doesn't get abused — readers of this blog get the unfair advantage.

## What you can do with your YOLO365 ID

- Bet on every IPL 2026 match — pre-match and in-play
- International cricket: T20, ODI, Test, women's cricket
- Pro Kabaddi, ISL football, tennis Grand Slams, horse racing
- Live casino: Teen Patti, Andar Bahar, Roulette, Dragon Tiger, Blackjack
- 1,000+ slot games from Pragmatic Play, PG Soft and Evolution

## Common mistakes to avoid

1. **Don't share your password** — even with our support team. We never ask for it.
2. **Don't use the same UPI for deposits and withdrawals if they belong to different names** — it slows down withdrawal verification.
3. **Don't bet your full deposit on one match** — read our [bankroll guide](/blog/cricket-betting-bankroll-management-india).

## Withdrawal speed

Withdrawals are processed within 5 minutes during peak hours (6pm – 1am IST) and within 15 minutes off-peak. The money lands directly in your Indian bank account via IMPS — no crypto, no wallets, no waiting.
`,
    faqs: [
      { q: "Is the YOLO365 ID free?", a: "Yes — there is no cost to create your YOLO365 ID. You only pay when you make your first deposit, which can be as low as ₹100." },
      { q: "Do I need to upload KYC documents?", a: "No upfront KYC is required to start betting. KYC is only requested for very large withdrawals (above ₹2 lakh) as required by international gaming regulations." },
      { q: "Can I have multiple IDs?", a: "Each user is allowed one YOLO365 ID. Multiple IDs from the same person violate our T&Cs and may result in winnings being voided." },
    ],
  },
  {
    slug: "ipl-2026-betting-tips-yolo365",
    title: "IPL 2026 Betting Tips: Sharpest Odds, Live Markets & Strategy on YOLO365",
    description: "Complete IPL 2026 betting tips — read the toss, weather, pitch reports, in-play markets and bankroll strategy on YOLO365 with the sharpest odds in India.",
    keywords: "IPL 2026 betting tips, IPL betting strategy, IPL toss prediction, in-play cricket betting, yolo365 IPL",
    date: "2026-03-20",
    updated: "2026-04-28",
    readMinutes: 9,
    category: "IPL",
    cover: cricketImg,
    excerpt: "From toss-based betting and pitch reports to live in-play markets, here's the strategy framework professional Indian punters use on YOLO365 during IPL 2026.",
    content: `
## The IPL is the most profitable cricket betting market in the world

IPL has more pre-match data, sharper bookmaker pricing and deeper in-play markets than any other T20 league. That sounds like bad news for punters — but it's actually the opposite. The sheer liquidity means you can find genuine pricing errors, and YOLO365 publishes some of the sharpest odds in the Indian market because we run as an exchange model rather than a fixed-odds book.

## Tip 1 — Always read the toss

In IPL 2024 and 2025, teams winning the toss and choosing to chase won 62% of matches at Chepauk and 58% at Chinnaswamy. Before you place a pre-match bet, check:

- Toss winner
- Decision (bat / bowl)
- Average 1st innings score at the venue this season
- Dew factor (anything after 7pm in Chennai, Mumbai, Hyderabad)

If you have a strong opinion *before* the toss, place a small position pre-match and a larger one in-play after the toss confirms the conditions.

## Tip 2 — Pitch reports beat gut feel

The IPL broadcast pitch report is gold. Watch the 30 seconds before the toss and listen specifically for:

- "Two-paced" → favors bowlers, lower totals
- "Belter" / "road" → favors batsmen, 200+ totals
- "Dry" → spinners come into play in the second innings
- "Tinge of green" → seamers swing the new ball

Use this to bet **total runs** markets, not just match winner.

## Tip 3 — The in-play model

YOLO365's in-play (live) market updates every ball. The sharpest edge is usually in:

- **Next-over runs** during powerplay
- **Wicket in the next 2 overs** when a new batsman is in
- **Match odds during a mini-collapse** — the market over-reacts to 2 quick wickets

Set yourself a rule: never bet in-play during the first ball of an over. Wait for the line to settle.

## Tip 4 — Bankroll management

Your bankroll is sacred. We recommend the **2% rule**:

> Never stake more than 2% of your total bankroll on a single market.

If you have ₹10,000 in your YOLO365 wallet, your maximum single bet is ₹200. This sounds small but it's the difference between players who survive a season and players who reload three times in March.

## Tip 5 — Use the cash-out feature

YOLO365 supports cash-out on most pre-match bets. If you backed CSK at 2.10 and they're cruising at 80/1 chasing 160, the cash-out might offer you 1.35. Take it on small stakes, let big stakes ride — that's the rule of thumb.

## Tip 6 — Avoid these markets

Some IPL markets are bookmaker traps:

- **Man of the Match** — too many variables, juiced margins
- **Exact total wickets** — high variance
- **Top batsman** in a 4-way tie

Stick to match winner, total runs, top bowler in a 2-way market, and over/under runs in a specific over.

## How to deposit on IPL match day

UPI is the fastest. Deposits credit in under 10 seconds. If you're betting on a match starting at 7:30pm, deposit by 7:00pm to avoid the rush. See our [deposit guide](/blog/upi-deposit-betting-india-guide) for screenshots.
`,
    faqs: [
      { q: "What is the best market for IPL beginners?", a: "Match winner is the simplest. Once you're comfortable, move to total runs (over/under) which has lower variance than wicket markets." },
      { q: "Can I bet in-play on YOLO365?", a: "Yes — live in-play markets update every ball with cash-out support on most positions." },
      { q: "What's the maximum bet size for IPL?", a: "Pre-match limits go up to ₹10 lakh per market for VIP users. Standard accounts start at ₹50,000 per market and scale with deposit history." },
    ],
  },
  {
    slug: "teen-patti-online-real-money-india-yolo365",
    title: "Teen Patti Online for Real Money in India — Rules, Variants & YOLO365 Live Tables",
    description: "Play Teen Patti online for real money on YOLO365. Full rules, hand rankings, variants (Muflis, AK47, Joker), live dealer tables and INR cash-out tips.",
    keywords: "teen patti online real money, teen patti india, live teen patti, yolo365 teen patti, teen patti rules",
    date: "2026-02-18",
    updated: "2026-04-25",
    readMinutes: 8,
    category: "Casino",
    cover: teenpattiImg,
    excerpt: "Teen Patti is India's national card game. Here's how to play it for real INR cash on YOLO365's live dealer tables — rules, variants, strategy and bankroll tips.",
    content: `
## What is Teen Patti?

Teen Patti — literally "three cards" — is the Indian cousin of three-card poker. It's been played on Diwali nights for generations, and is now one of the most popular live casino games in India. YOLO365 streams Teen Patti from real Evolution and Ezugi studios with Hindi-speaking dealers.

## Hand rankings (highest to lowest)

1. **Trail / Trio** — three of a kind (e.g. 3 Aces)
2. **Pure Sequence** — three consecutive cards same suit (e.g. 5-6-7 ♥)
3. **Sequence (Run)** — three consecutive cards different suits
4. **Color** — three cards same suit, not in sequence
5. **Pair** — two cards of the same rank
6. **High Card** — none of the above; highest card wins

## How to play on YOLO365

- Open the live casino lobby on YOLO365
- Choose a Teen Patti table (₹10 to ₹50,000 stakes)
- Place your **Ante** before the deal
- Choose **Play** (match the bet) or **Fold** after seeing your cards
- Dealer reveals; highest hand wins

## Best variant: 20-20 Teen Patti

YOLO365's most-played variant is **20-20 Teen Patti** — fast rounds (~30 seconds) with side bets on Player A or Player B winning. The house edge is around 2.85%, which is lower than Andar Bahar.

## Strategy: when to play vs fold

A common rookie mistake is playing every hand because the ante is small. Use this rule:

- **Always play**: Pair of 7s or higher, any sequence, any color, any trail
- **Always fold**: High card with no card above 10, no pair
- **Coin flip**: Pair below 7s — depends on your read of the dealer's previous hands

## Side bets to use carefully

Side bets like "Player gets a pair" pay 2:1 but the true odds are closer to 5:1. Use them sparingly — once every 5 hands at most.

## Bankroll for Teen Patti

Use the 5% rule: never put more than 5% of your session bankroll into a single hand. Teen Patti has higher variance than blackjack so respect it.

## Withdrawal after a win

Teen Patti winnings are credited instantly to your YOLO365 wallet. Withdrawals to UPI take ~5 minutes. There are no win caps on live casino games, unlike some bonuses.

Want the full live dealer experience? See our [Andar Bahar guide](/blog/andar-bahar-online-strategy-india) next.
`,
    faqs: [
      { q: "Is online Teen Patti legal in India?", a: "Teen Patti is classified as a game of skill in many Indian states (Karnataka, Maharashtra, West Bengal). YOLO365 operates under international gaming licenses and is widely used by Indian players." },
      { q: "What's the minimum bet?", a: "₹10 on entry-level tables. VIP tables go up to ₹1 lakh per hand." },
      { q: "Are the dealers real?", a: "Yes — all live Teen Patti tables on YOLO365 stream from physical studios with real human dealers, not RNG software." },
    ],
  },
  {
    slug: "andar-bahar-online-strategy-india",
    title: "Andar Bahar Online: Rules, Odds & Winning Strategy on YOLO365",
    description: "Master Andar Bahar online — rules, true odds, side bets, betting patterns and the YOLO365 live dealer experience for Indian players.",
    keywords: "andar bahar online, andar bahar real money, andar bahar strategy, yolo365 andar bahar",
    date: "2026-02-05",
    updated: "2026-04-22",
    readMinutes: 6,
    category: "Casino",
    cover: abImg,
    excerpt: "Andar Bahar looks simple — pick a side, win or lose. But there's a layer of strategy most players miss. Here's the full breakdown.",
    content: `
## What is Andar Bahar?

Andar Bahar is a coin-flip card game that originated in Bangalore. The dealer reveals one "Joker" card, then deals cards alternately to two piles — Andar (inside) and Bahar (outside). The first pile to match the Joker's rank wins.

## The math

- Statistically, **Bahar wins 51.5%** of the time when the Joker is black
- **Andar wins 50.7%** of the time when the Joker is red
- The house edge is ~2.15% — one of the lowest in any casino game

## How to play on YOLO365

1. Place your bet on Andar or Bahar
2. Dealer reveals the Joker
3. Cards are dealt alternately
4. First match wins; payout is 0.9:1 (because of the small house edge)

## Side bets

YOLO365 offers these side bets:

- **First card matches Joker** — 11:1
- **Match within 5 cards** — 2.5:1
- **Match within 10 cards** — 1.5:1
- **Match after 40+ cards** — 25:1 (rare but possible)

## Strategy: the Martingale problem

Many players use Martingale on Andar Bahar (double after every loss). Don't. The bet limits hit before your bankroll recovers from a 6-loss streak. Instead use **flat betting** — same stake every round.

## Pattern reading

Watch the previous 20 results in the YOLO365 history panel. If Bahar has won 14 of the last 20, the dealer's deck is running hot — but cards have no memory. Pattern reading feels good but doesn't change probability. Use it for entertainment, not edge.

## Live tables vs RNG

YOLO365 offers both live dealer Andar Bahar (recommended) and RNG / instant Andar Bahar (good for fast play). RNG payouts are independently audited.

For other live games see [Dragon Tiger strategy](/blog/dragon-tiger-live-casino-india).
`,
    faqs: [
      { q: "Is Andar Bahar a game of skill?", a: "Andar Bahar is primarily a game of chance with very small skill elements (side bet selection and bankroll management)." },
      { q: "What's the minimum bet?", a: "₹10 on standard tables, ₹100 on VIP tables." },
    ],
  },
  {
    slug: "upi-deposit-betting-india-guide",
    title: "How to Deposit on YOLO365 with UPI, PhonePe & GPay (Step-by-Step Guide)",
    description: "Complete guide to depositing on YOLO365 using UPI, PhonePe, Google Pay, Paytm and IMPS. Instant credit, zero fees and Indian bank support.",
    keywords: "yolo365 deposit, UPI betting deposit, phonepe betting, gpay betting, instant deposit india",
    date: "2026-01-28",
    updated: "2026-04-20",
    readMinutes: 5,
    category: "Guide",
    cover: heroImg,
    excerpt: "Depositing on a betting site shouldn't be harder than a Zomato order. Here's the YOLO365 UPI deposit flow — under 30 seconds end to end.",
    content: `
## Why UPI is the only deposit method you need

UPI in India settled ₹200+ lakh crore in 2025. It's instant, free and works at every Indian bank. YOLO365 supports UPI through every major app — PhonePe, GPay, Paytm, BHIM, Amazon Pay and CRED.

## Step-by-step deposit on YOLO365

1. Log into your YOLO365 account
2. Click **Deposit** (top right)
3. Choose **UPI** and enter your amount (minimum ₹100, maximum ₹2 lakh per transaction)
4. The system shows a UPI ID or QR code
5. Pay from your UPI app — the wallet credits within 10 seconds

## Pro tips

- **Use the same UPI ID every time** — speeds up withdrawal verification later
- **Add the YOLO365 UPI ID as a saved beneficiary** — saves typing
- **Screenshot the UPI reference number** — useful if a deposit doesn't credit (rare, but happens once in 5,000 transactions)

## What if my deposit doesn't credit?

Send the screenshot to WhatsApp support. 95% of "missing" deposits actually credit within 2 minutes — the issue is usually app-side delay. The remaining 5% are resolved manually within 10 minutes.

## Other supported methods

- **IMPS / NEFT bank transfer** — for amounts above ₹2 lakh
- **Net banking** — supported for HDFC, ICICI, SBI, Axis, Kotak
- **Crypto** — USDT (TRC-20) for international users only

## Withdrawal pairing

To make withdrawals frictionless, deposit and withdraw using the **same bank account name**. Cross-account transfers trigger a manual verification (usually a 30-minute delay).

For more on IPL match-day strategy see our [IPL betting tips](/blog/ipl-2026-betting-tips-yolo365).
`,
    faqs: [
      { q: "Are there any deposit fees?", a: "No. YOLO365 does not charge any fee on UPI, PhonePe, GPay, Paytm or net banking deposits." },
      { q: "What's the deposit limit?", a: "Minimum ₹100, maximum ₹2 lakh per UPI transaction. Higher amounts use IMPS." },
    ],
  },
  {
    slug: "cricket-betting-bankroll-management-india",
    title: "Cricket Betting Bankroll Management: The 2% Rule Indian Punters Swear By",
    description: "Stop blowing your bankroll. Learn the 2% rule, Kelly criterion, stop-loss limits and bet sizing strategy used by professional Indian cricket bettors on YOLO365.",
    keywords: "cricket betting bankroll, betting bankroll management india, kelly criterion betting, stop loss betting",
    date: "2026-01-15",
    updated: "2026-04-18",
    readMinutes: 8,
    category: "Strategy",
    cover: cricketImg,
    excerpt: "The single biggest difference between recreational and profitable bettors isn't picks — it's bet sizing. Here's the math.",
    content: `
## Why bankroll management matters more than picks

You can hit 55% of your bets — a genuinely strong rate — and still go broke if you bet too big. Bankroll management is the math that keeps a winning edge alive long enough to compound.

## The 2% rule (start here)

Never stake more than **2% of your total bankroll** on a single market. If your YOLO365 wallet has ₹50,000, your maximum single bet is ₹1,000.

This rule survives 30+ losing bets in a row — statistically almost impossible if you have any edge at all.

## The Kelly criterion (advanced)

Kelly tells you the mathematically optimal stake size given your edge:

> Stake % = (Win probability × Decimal odds − 1) / (Decimal odds − 1)

Example: you think CSK is genuinely 60% to win, and YOLO365 prices them at 1.90.

Stake % = (0.60 × 1.90 − 1) / (1.90 − 1) = 0.14 / 0.90 = **15.5%**

Most pros use **Half-Kelly** (7.7% in this case) to reduce variance.

## Stop-loss rules

Set a daily and weekly stop-loss:

- **Daily stop-loss**: 10% of bankroll
- **Weekly stop-loss**: 25% of bankroll

If you hit either, log out. The market will be there tomorrow.

## Don't chase losses

The fastest way to blow a bankroll is doubling stakes after a loss to "win it back". This is gambler's ruin in math textbook form. Stick to flat or Kelly-fractional staking.

## Tracking matters

Use a Google Sheet with one row per bet:

- Date, market, stake, odds, result, P/L, running bankroll

After 100 bets you'll know your true win rate and ROI. Most players overestimate both by 10-15%.

## Bonus: the YOLO365 cash-out leverage

Cash-out lets you lock in profit on pre-match bets that are going well. The smart play is to cash out 50% of a winning bet at +50% of your stake, and let the other 50% ride. This converts variance into a smoother equity curve.

Combine this with the [IPL strategy guide](/blog/ipl-2026-betting-tips-yolo365) for a full framework.
`,
    faqs: [
      { q: "How much bankroll do I need to start?", a: "₹5,000 is enough for a beginner using the 2% rule (₹100 per bet). Serious bettors typically start at ₹50,000+." },
      { q: "Is the Kelly criterion safe?", a: "Full Kelly is high variance. Half-Kelly or Quarter-Kelly is the standard professional choice." },
    ],
  },
  {
    slug: "live-casino-india-evolution-ezugi-yolo365",
    title: "Live Casino India 2026: Evolution, Ezugi & Pragmatic Play on YOLO365",
    description: "The complete guide to live casino in India on YOLO365 — Evolution, Ezugi, Pragmatic Play live tables, rules, RTPs and which games have the lowest house edge.",
    keywords: "live casino india, evolution gaming india, ezugi india, pragmatic play live, yolo365 live casino",
    date: "2026-01-08",
    updated: "2026-04-15",
    readMinutes: 7,
    category: "Casino",
    cover: blackjackImg,
    excerpt: "Live casino has overtaken slots as India's favorite online gaming category. Here's the complete provider, table and house-edge breakdown for 2026.",
    content: `
## Why live casino exploded in India

Three reasons: faster mobile internet, INR-denominated tables, and Hindi-speaking dealers. YOLO365 partners with the three biggest live casino studios in the world: Evolution Gaming, Ezugi and Pragmatic Play Live.

## Evolution Gaming highlights

- **Lightning Roulette** — multipliers up to 500x; RTP 97.30%
- **Crazy Time** — game show wheel; RTP 96.08%
- **Live Blackjack VIP** — 6-deck shoe; RTP 99.28% with optimal play
- **First Person Dragon Tiger** — single-player RNG version, RTP 96.27%

## Ezugi highlights (made for India)

- **Andar Bahar** — Indian dealers, Hindi commentary; RTP 97.85%
- **Indian Teen Patti** — multiple variants, ₹10 minimum
- **OTT Andar Bahar** — fast-paced, 30-second rounds

## Pragmatic Play Live highlights

- **Mega Wheel** — 1000x multipliers; RTP 96.51%
- **Sweet Bonanza CandyLand** — game show; RTP 96.51%
- **One Blackjack** — unlimited seats; RTP 99.59% with optimal play

## House edge ranking (lowest to highest)

1. Blackjack with optimal strategy — 0.4–0.7%
2. Baccarat (banker bet) — 1.06%
3. Andar Bahar — 2.15%
4. European Roulette — 2.70%
5. Teen Patti — 2.85%
6. Dragon Tiger — 3.73%

## Which game should you play?

- **Want lowest house edge?** Live Blackjack with basic strategy
- **Want pure entertainment?** Crazy Time or Mega Wheel
- **Want a quick game?** Dragon Tiger (cards in 30 seconds)
- **Want skill matters?** Blackjack
- **Want pure India vibe?** Andar Bahar or Teen Patti

## How to access on YOLO365

Live casino is a single tab inside the YOLO365 lobby. All games are streamed in HD with mobile-optimized portrait mode.

For specific game strategy see our [Roulette guide](/blog/online-roulette-india-strategy) and [Dragon Tiger guide](/blog/dragon-tiger-live-casino-india).
`,
    faqs: [
      { q: "What's the minimum bet on live casino?", a: "₹10 on Ezugi Andar Bahar and Teen Patti. Evolution tables typically start at ₹50." },
      { q: "Is live casino fair?", a: "Yes — all three providers (Evolution, Ezugi, Pragmatic) are licensed by Malta Gaming Authority and audited by eCOGRA." },
    ],
  },
  {
    slug: "online-roulette-india-strategy",
    title: "Online Roulette India: European vs American, Best Strategies on YOLO365",
    description: "Online roulette guide for India — European vs American wheel, Martingale, Fibonacci, James Bond strategy and YOLO365 live dealer roulette tables.",
    keywords: "online roulette india, european roulette, roulette strategy, yolo365 roulette, lightning roulette",
    date: "2025-12-22",
    updated: "2026-04-12",
    readMinutes: 6,
    category: "Casino",
    cover: rouletteImg,
    excerpt: "Roulette is the easiest casino game to learn and the hardest to master. Here's the math and the strategy framework for YOLO365 live tables.",
    content: `
## European vs American — always pick European

European roulette has 37 pockets (0–36). House edge: 2.70%.
American roulette has 38 pockets (0, 00, 1–36). House edge: 5.26%.

Picking American instead of European doubles the house's edge. YOLO365 offers both, but European is the smart play.

## The bet types

- **Inside bets** (single number, split, street): high payout (35:1 to 11:1), low frequency
- **Outside bets** (red/black, odd/even, dozens): low payout (1:1 to 2:1), high frequency

## Strategy 1 — Martingale

Double after every loss on a 1:1 bet. Recovers all losses + 1 unit on the next win.

**Problem**: 8 losses in a row (~0.4% chance per session) wipes out 256 units. Most YOLO365 tables have a max bet that triggers before recovery.

## Strategy 2 — Fibonacci

Bet sequence: 1, 1, 2, 3, 5, 8, 13, 21. Move forward after a loss, back two after a win. Slower bankroll burn than Martingale.

## Strategy 3 — James Bond

Spread ₹2,000 like this:
- ₹1,400 on 19–36 (high)
- ₹500 on 13–18 (six-line)
- ₹100 on 0 (insurance)

Wins on any number except 1–12. House edge stays at 2.70% — this is a coverage strategy, not an edge strategy.

## Lightning Roulette

Evolution's Lightning Roulette adds 1–5 random "lucky numbers" each spin with multipliers up to 500x. Straight-up bets pay 29:1 base + multiplier. RTP 97.30%, slightly higher than standard.

## House edge is house edge

No betting system beats negative expected value over the long run. Strategies are bankroll-shaping tools — they make sessions feel different but don't change the math. Use them to manage variance, not to "beat" the wheel.
`,
    faqs: [
      { q: "Which roulette has the best odds?", a: "European single-zero roulette at 2.70% house edge. French roulette with 'la partage' rule is even better at 1.35% on even-money bets." },
    ],
  },
  {
    slug: "dragon-tiger-live-casino-india",
    title: "Dragon Tiger on YOLO365: Rules, Odds & The Tie Bet Trap",
    description: "Dragon Tiger live casino guide — rules, payouts, why the Tie bet is a trap, and how to play it on YOLO365's live dealer tables.",
    keywords: "dragon tiger online, dragon tiger strategy, yolo365 dragon tiger, live dragon tiger",
    date: "2025-12-10",
    updated: "2026-04-08",
    readMinutes: 5,
    category: "Casino",
    cover: dtImg,
    excerpt: "Dragon Tiger is the fastest live casino game in the world — one card each, winner takes all in 30 seconds. Here's why the Tie bet is the worst bet in the casino.",
    content: `
## What is Dragon Tiger?

Dragon Tiger is a two-card game from Cambodia, popular in South-East Asia and now India. The dealer places one card on Dragon, one on Tiger. Highest card wins. That's the entire game.

## Payouts

- **Dragon or Tiger** — 1:1 (50% win rate adjusted for ties)
- **Tie** — 8:1
- **Suited Tie** — 50:1
- **Big / Small** — 1:1
- **Suit (specific colour)** — 3:1

## House edge

- Dragon / Tiger: 3.73%
- Big / Small: 3.73%
- Tie: **32.77%** ← do not bet
- Suited Tie: **13.89%** ← do not bet

## Strategy

There is no real strategy — Dragon Tiger is pure variance. The only "strategy" is to never touch the Tie bet. The 8:1 payout looks tempting but the true odds are closer to 14:1.

## Why play it then?

Pace. A round takes 30 seconds. If you want quick action with low cognitive load between, say, IPL innings breaks, Dragon Tiger is perfect.

## Bankroll guidance

Use the 2% rule. Variance is high — expect 6-loss streaks every 200 hands.

## On YOLO365

Live Dragon Tiger streams from Ezugi and Evolution studios. ₹50 minimum, ₹2 lakh maximum. Mobile portrait mode supported.
`,
    faqs: [{ q: "What's the best bet in Dragon Tiger?", a: "Dragon or Tiger at 1:1. Avoid all Tie variants — the house edge is over 13%." }],
  },
  {
    slug: "kabaddi-betting-yolo365-pro-kabaddi-league",
    title: "Pro Kabaddi League Betting on YOLO365: Markets, Tips & Player Stats",
    description: "Bet on Pro Kabaddi League on YOLO365 — match winner, total raid points, top raider, super tackle markets and live in-play. Sharpest PKL odds in India.",
    keywords: "pro kabaddi betting, PKL betting, kabaddi betting tips, yolo365 kabaddi",
    date: "2025-11-28",
    updated: "2026-04-05",
    readMinutes: 6,
    category: "Strategy",
    cover: kabaddiImg,
    excerpt: "Pro Kabaddi is India's second-biggest sport for betting after cricket. Here's the market guide and the data points that move lines.",
    content: `
## Why kabaddi is an edge market

PKL is under-modelled by international bookmakers. The kabaddi-specific stats — successful raid %, defender catch rate, super tackle frequency — are publicly available but rarely priced into match lines. That gap is your edge.

## Key markets on YOLO365

- **Match Winner** (1.50–2.50 typical range)
- **Total Raid Points** (over/under, varies by team)
- **Top Raider** (player props)
- **First Super Tackle** (timing market)
- **Half-Time / Full-Time double**

## Stats that move lines

1. **Top raider availability** — Pawan Sehrawat or Naveen Kumar missing swings the line by ~15%
2. **Defender form** — Surjeet Singh, Fazel Atrachali matter for total tackle markets
3. **Home vs away** — home win rate is ~58% in PKL
4. **Pitch / mat condition** — wet mats reduce raid success

## In-play strategy

Kabaddi is high-variance. Wait for a 5-point lead in the first half before backing the leader at shorter odds. Never bet "next raid" markets blind — wait for the raider to step on the mat.

## Bankroll

PKL has shorter seasons than IPL — around 12 weeks. Set a season bankroll and divide by 60 (matches) to get max stake per game.

## On YOLO365

Live kabaddi is streamed in-app for ID holders. Pre-match markets open 24 hours before throw-in.

For player-level analysis follow the official Pro Kabaddi stats portal.
`,
    faqs: [{ q: "Is kabaddi betting available year-round?", a: "PKL runs roughly Dec–Feb. International kabaddi (Asian Games, World Cup) provides additional markets." }],
  },
];

export const categories = ["All", "Cricket", "IPL", "Casino", "Guide", "Strategy"] as const;
