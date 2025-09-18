import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-mystery-purple/10 via-background to-cyber-green/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mystery-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-green via-cyber-blue to-mystery-purple bg-clip-text text-transparent">
            Monetize Knowledge
            <br />
            <span className="text-parchment">Securely</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The ultimate marketplace for encrypted gaming strategies. Sell your expertise, 
            unlock secrets, and dominate the competition with blockchain-secured knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cyber" size="lg" className="gap-2">
              <Zap className="w-5 h-5" />
              Explore Strategies
            </Button>
            <Button variant="mystery" size="lg" className="gap-2">
              <Shield className="w-5 h-5" />
              Create Strategy
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mb-4 cyber-glow">
                <Lock className="w-8 h-8 text-cyber-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Encrypted Secrets</h3>
              <p className="text-sm text-muted-foreground">
                Strategies unlock only after verified payment through smart contracts
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-mystery-purple/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-mystery-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain-verified purchases with instant content delivery
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Only strategies with verified win rates and community approval
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};