# 🎯 Strat Scrolls Secure

> **Advanced Strategy Marketplace with Cryptographic Privacy**

A next-generation decentralized platform for trading investment strategies using state-of-the-art FHE (Fully Homomorphic Encryption) technology. Experience the future of private financial markets where your strategies remain completely encrypted while enabling public verification.

## 🚀 Key Capabilities

- **🔐 Cryptographic Privacy**: All strategy data encrypted using FHE technology
- **🌐 Universal Wallet Integration**: Support for 50+ wallet providers including Rainbow, MetaMask, WalletConnect
- **📊 Encrypted Performance Metrics**: Track returns and risk metrics without exposing sensitive data
- **✅ Public Verification**: Demonstrate strategy performance while maintaining data privacy
- **⚡ High-Performance Operations**: Optimized for fast, secure transactions
- **🔗 Multi-Chain Architecture**: Built for Sepolia with seamless mainnet migration

## 🛠️ Technical Stack

| Layer | Technology | Description |
|-------|------------|-------------|
| **Frontend** | React 18 + TypeScript + Vite | High-performance modern web framework |
| **UI Components** | Tailwind CSS + shadcn/ui | Professional, accessible design system |
| **Blockchain** | Ethereum + FHE (Zama Network) | Privacy-preserving smart contract execution |
| **Wallet Integration** | RainbowKit + Wagmi + Viem | Universal Web3 wallet connectivity |
| **Encryption Engine** | FHE Solidity Libraries | Zero-knowledge cryptographic operations |
| **Build Pipeline** | Vite + npm | Optimized production deployment |

## 📋 System Requirements

- **Runtime**: Node.js v18+ (LTS recommended)
- **Package Manager**: npm/yarn/pnpm
- **Version Control**: Git
- **Web3 Wallet**: MetaMask, Rainbow, or compatible wallet
- **Test Network**: Sepolia testnet with test ETH

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JuliaFischer55/strat-scrolls-secure.git
cd strat-scrolls-secure
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

### 4. Start Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

## 🔧 Smart Contract Deployment

### 1. Compile Contracts

```bash
npm run compile
```

### 2. Run Tests

```bash
npm run test
```

### 3. Deploy to Sepolia

```bash
npm run deploy
```

## 📁 Project Structure

```
strat-scrolls-secure/
├── contracts/              # Smart contracts
│   └── StratScrollsSecure.sol
├── scripts/                # Deployment scripts
│   └── deploy.ts
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── HeroSection.tsx
│   │   ├── StrategyCard.tsx
│   │   ├── StrategyMarketplace.tsx
│   │   └── WalletConnection.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   │   ├── contract.ts    # Contract interactions
│   │   ├── fhe-utils.ts   # FHE utilities
│   │   └── utils.ts
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── Marketplace.tsx
│   │   ├── CreateStrategy.tsx
│   │   ├── Purchase.tsx
│   │   └── Rewards.tsx
│   ├── App.tsx            # Main application
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── hardhat.config.ts      # Hardhat configuration
└── package.json
```

## 🔐 Privacy & Security Architecture

This project implements a comprehensive privacy-preserving strategy marketplace using FHE encryption to protect sensitive trading data while maintaining full functionality.

### Key Security Features:
- **Encrypted Strategy Data**: All strategy parameters are encrypted using FHE
- **Private Performance Metrics**: Returns and risk metrics remain private
- **Secure Marketplace**: Buy and sell strategies without exposing sensitive information
- **Zero-Knowledge Verification**: Prove strategy performance without revealing data

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@stratscrolls.com or join our Discord community.
