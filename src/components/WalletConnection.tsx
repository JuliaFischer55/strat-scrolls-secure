import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const WalletConnection = () => {
  return (
    <Card className="p-4 bg-card/50 backdrop-blur-sm border-cyber-green/30">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-cyber-green/20 rounded-full">
          <Shield className="w-4 h-4 text-cyber-green" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Secure Connection</p>
          <p className="text-xs text-muted-foreground">Connect your wallet to access encrypted strategies</p>
        </div>
        <ConnectButton 
          chainStatus="icon"
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </div>
    </Card>
  );
};