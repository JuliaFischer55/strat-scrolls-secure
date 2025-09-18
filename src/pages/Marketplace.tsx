import { Header } from "@/components/Header";
import { StrategyMarketplace } from "@/components/StrategyMarketplace";
import { CodeRainFooter } from "@/components/CodeRainFooter";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-cyber-green">
              Strategy Marketplace
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Browse and purchase encrypted gaming strategies from the world's best players. 
              Each strategy is verified for authenticity and locked until purchase.
            </p>
          </div>
        </div>
        <StrategyMarketplace />
      </main>
      <CodeRainFooter />
    </div>
  );
};

export default Marketplace;