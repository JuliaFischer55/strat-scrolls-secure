import { useState } from "react";
import { Header } from "@/components/Header";
import { CodeRainFooter } from "@/components/CodeRainFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Lock, Shield, Zap, Download, Eye, Heart } from "lucide-react";

const Purchase = () => {
  const [selectedStrategy] = useState({
    title: "Ultimate Valorant Crosshair Settings",
    author: "ProAim_Master",
    price: "0.05",
    rating: 4.9,
    reviews: 234,
    game: "Valorant",
    description: "Secret crosshair configurations used by top 500 radiant players. Includes sensitivity optimization and custom keybinds.",
    longDescription: "This comprehensive guide contains the exact crosshair settings, sensitivity configurations, and keybind optimizations used by professional Valorant players. You'll learn the science behind crosshair placement, how to find your perfect sensitivity, and advanced techniques for consistent aim.",
    features: [
      "10+ crosshair configurations for different weapons",
      "Sensitivity calculator with step-by-step guide", 
      "Custom keybind layouts for competitive play",
      "Aim training routine (30-day program)",
      "Video demonstrations for each setting",
      "Config file downloads ready to import"
    ],
    tags: ["Aim Training", "Crosshair", "Sensitivity", "Competitive"],
    lastUpdated: "2024-01-15",
    downloads: 1847
  });

  const [step, setStep] = useState<'review' | 'payment' | 'success'>('review');

  const handlePurchase = () => {
    setStep('payment');
    // Simulate payment processing
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            <Card className="scroll-card p-8 text-center">
              <div className="w-20 h-20 bg-cyber-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-background" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-cyber-green">
                Purchase Successful!
              </h1>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Your strategy has been unlocked and is now available for download.
              </p>
              
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyber-green">
                  {selectedStrategy.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-blue">{selectedStrategy.price} ETH</div>
                    <div className="text-muted-foreground">Paid</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold">Unlocked</div>
                    <div className="text-muted-foreground">Status</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-mystery-purple">Lifetime</div>
                    <div className="text-muted-foreground">Access</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button className="bg-cyber-green text-background hover:bg-cyber-green/90 cyber-glow">
                  <Download className="w-4 h-4 mr-2" />
                  Download Strategy
                </Button>
                <Button variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green/10">
                  <Eye className="w-4 h-4 mr-2" />
                  View Content
                </Button>
              </div>
            </Card>
          </div>
        </main>
        <CodeRainFooter />
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-8 max-w-4xl">
            <Card className="scroll-card p-8 text-center">
              <div className="w-20 h-20 bg-cyber-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Zap className="w-10 h-10 text-background" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4 text-cyber-blue">
                Processing Payment...
              </h1>
              
              <p className="text-muted-foreground mb-8 text-lg">
                Please confirm the transaction in your wallet. Do not close this page.
              </p>
              
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span>Strategy Price:</span>
                  <span className="font-bold">{selectedStrategy.price} ETH</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span>Platform Fee (10%):</span>
                  <span className="font-bold">{(parseFloat(selectedStrategy.price) * 0.1).toFixed(3)} ETH</span>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-cyber-green">{(parseFloat(selectedStrategy.price) * 1.1).toFixed(3)} ETH</span>
                </div>
              </div>
            </Card>
          </div>
        </main>
        <CodeRainFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Strategy Details */}
            <div className="lg:col-span-2">
              <Card className="scroll-card p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-cyber-blue text-background">
                      {selectedStrategy.game}
                    </Badge>
                    <h1 className="text-3xl font-bold mb-2 text-cyber-green">
                      {selectedStrategy.title}
                    </h1>
                    <p className="text-muted-foreground mb-4">
                      by {selectedStrategy.author}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="border-cyber-green text-cyber-green">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="font-semibold">{selectedStrategy.rating}</span>
                    <span className="text-muted-foreground">({selectedStrategy.reviews} reviews)</span>
                  </div>
                  <div className="text-muted-foreground">
                    {selectedStrategy.downloads} downloads
                  </div>
                  <div className="text-muted-foreground">
                    Updated {selectedStrategy.lastUpdated}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {selectedStrategy.longDescription}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyber-green">
                    What's Included:
                  </h3>
                  <ul className="space-y-2">
                    {selectedStrategy.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-cyber-green flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedStrategy.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-cyber-green/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Security Notice */}
              <Card className="p-4 bg-cyber-green/5 border-cyber-green/20">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-cyber-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-cyber-green mb-1">
                      Encrypted & Verified
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      This strategy is encrypted on the blockchain and has been verified for authenticity. 
                      Content will be unlocked immediately after purchase.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="scroll-card p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-cyber-green mb-2">
                    {selectedStrategy.price} ETH
                  </div>
                  <p className="text-muted-foreground">
                    Instant access after purchase
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span>Strategy Price:</span>
                    <span>{selectedStrategy.price} ETH</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Platform Fee (10%):</span>
                    <span>{(parseFloat(selectedStrategy.price) * 0.1).toFixed(3)} ETH</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-cyber-green">
                      {(parseFloat(selectedStrategy.price) * 1.1).toFixed(3)} ETH
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={handlePurchase}
                  className="w-full bg-cyber-green text-background hover:bg-cyber-green/90 cyber-glow mb-4"
                  size="lg"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Purchase & Unlock
                </Button>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyber-green" />
                    Secure blockchain transaction
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-cyber-green" />
                    Instant download access
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyber-green" />
                    Lifetime access guarantee
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <CodeRainFooter />
    </div>
  );
};

export default Purchase;