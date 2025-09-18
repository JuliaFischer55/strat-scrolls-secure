import { WalletConnection } from "./WalletConnection";
import scrollLogo from "@/assets/scroll-logo.png";

export const Header = () => {
  return (
    <header className="border-b border-cyber-green/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={scrollLogo} 
              alt="Encrypted Strategy Market" 
              className="w-12 h-12 pixelated-border rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-cyber-green">
                Strategy Vault
              </h1>
              <p className="text-xs text-muted-foreground">
                Monetize Knowledge Securely
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/marketplace" className="text-sm hover:text-cyber-green transition-colors">
              Marketplace
            </a>
            <a href="/create" className="text-sm hover:text-cyber-green transition-colors">
              Create Strategy
            </a>
            <a href="/rewards" className="text-sm hover:text-cyber-green transition-colors">
              Rewards
            </a>
          </nav>
          
          <WalletConnection />
        </div>
      </div>
    </header>
  );
};