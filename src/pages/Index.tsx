import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CodeRainFooter } from "@/components/CodeRainFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-cyber-green">
                Why Choose Strategy Vault?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The most secure and rewarding platform for gaming knowledge exchange
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="scroll-card text-center">
                <Shield className="w-12 h-12 text-cyber-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-cyber-green">
                  Blockchain Secured
                </h3>
                <p className="text-muted-foreground">
                  All strategies are encrypted and stored on blockchain, ensuring authenticity and preventing theft.
                </p>
              </Card>
              
              <Card className="scroll-card text-center">
                <Zap className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-cyber-blue">
                  Instant Access
                </h3>
                <p className="text-muted-foreground">
                  Purchase and unlock strategies instantly. No waiting, no downloads - immediate access to premium content.
                </p>
              </Card>
              
              <Card className="scroll-card text-center">
                <Users className="w-12 h-12 text-mystery-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-mystery-purple">
                  Creator Rewards
                </h3>
                <p className="text-muted-foreground">
                  Earn crypto rewards for sharing your expertise. Level up your creator status and unlock exclusive benefits.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-cyber-green">
              Ready to Monetize Your Gaming Skills?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of players earning rewards by sharing their strategies. 
              Start your journey as a gaming knowledge creator today.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                asChild
                className="bg-cyber-green text-background hover:bg-cyber-green/90 cyber-glow"
                size="lg"
              >
                <a href="/marketplace">
                  Explore Marketplace
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-cyber-green text-cyber-green hover:bg-cyber-green/10"
                size="lg"
              >
                <a href="/create">
                  Create Strategy
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <CodeRainFooter />
    </div>
  );
};

export default Index;
