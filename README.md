# F.U.N. - Factorio Unified Network

🏭 **Industrial exchange & logistics network** inspired by Factorio's industrial aesthetic.

![Status](https://img.shields.io/badge/status-deployed-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Live Demo

- **Production**: [factoriounifiednetwork.com](https://factoriounifiednetwork.com) *(pending DNS configuration)*
- **Vercel URL**: [https://factorio-unified-network-qs50hyfo3-ssf-projects.vercel.app](https://factorio-unified-network-qs50hyfo3-ssf-projects.vercel.app)

## 🎯 Features

### Mission Control Dashboard
- Major Order progress tracking with hazard-stripe banner
- Live ticker tape showing commodity prices
- Production overview with striped progress bars
- Network status and real-time activity log

### Grand Exchange
- Item picker with quality tier filtering
- CRT-style price charts (green on black)
- Live order book with bid/ask display
- Trade controls for buying and selling

### My Logistics
- Cloud storage grid (inventory system)
- Transaction history log
- Daily profit/loss statistics

## 🎨 Design Philosophy

Heavy **skeuomorphism** replicating Factorio's industrial UI:
- ✅ No rounded corners - sharp industrial edges only
- ✅ 3D beveled panels with raised/sunken effects
- ✅ Chamfered corners on buttons
- ✅ Striped green progress bars
- ✅ CRT-style data displays
- ✅ Industrial color palette (dark greys, orange accents)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Charts**: Recharts
- **Icons**: Lucide React
- **State**: TanStack Query (for future real-time features)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/bwmcclai/FactorioUnifiedNetwork.git
cd FactorioUnifiedNetwork

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 DNS Configuration

To use the custom domain `factoriounifiednetwork.com`, add the following DNS record:

**A Record:**
```
Type: A
Host: @
Value: 76.76.21.21
TTL: Auto
```

**Instructions:**
1. Log into your domain registrar (GoDaddy)
2. Navigate to DNS Management
3. Add an A record pointing to `76.76.21.21`
4. Wait for DNS propagation (up to 48 hours, usually faster)

Vercel will automatically verify and configure SSL once DNS is updated.

## 📂 Project Structure

```
FactorioUnifiedNetwork/
├── app/
│   ├── globals.css          # Tailwind + custom utilities
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Mission Control dashboard
│   ├── market/page.tsx       # Grand Exchange
│   └── inventory/page.tsx    # My Logistics
├── components/
│   ├── layout/
│   │   └── header.tsx        # Global navigation
│   └── ui/
│       ├── factorio-panel.tsx    # 3D beveled container
│       ├── industrial-button.tsx # Orange gradient button
│       ├── progress-bar.tsx      # Striped progress bar
│       └── ticker-tape.tsx       # Scrolling marquee
├── lib/
│   └── mock-data.ts          # Development data
└── tailwind.config.ts        # Custom Factorio theme
```

## 🎮 Component Library

### FactorioPanel
Reusable container with 3D bevel effects:
```tsx
<FactorioPanel variant="raised" innerWell>
  {/* Content */}
</FactorioPanel>
```

### IndustrialButton
Orange gradient button with pressed effect:
```tsx
<IndustrialButton variant="primary">
  BUY
</IndustrialButton>
```

### ProgressBar
Striped progress indicator:
```tsx
<ProgressBar value={67500000} max={100000000} label="Iron Plates" />
```

### TickerTape
Scrolling price marquee:
```tsx
<TickerTape items={priceData} />
```

## 🔮 Roadmap

- [ ] Supabase integration for real-time data
- [ ] User authentication
- [ ] Actual trading logic
- [ ] WebSocket price updates
- [ ] More commodities and quality tiers
- [ ] Mobile responsive optimization
- [ ] Sound effects for UI interactions

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit PRs.

---

Built with ⚙️ by engineers, for engineers.
