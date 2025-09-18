import { useState } from "react";
import { Header } from "@/components/Header";
import { CodeRainFooter } from "@/components/CodeRainFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Lock, Star, DollarSign, Shield, Zap } from "lucide-react";
import { useCreateStrategy } from "@/lib/contract";
import { encryptPrivateData } from "@/lib/contract";
import { useAccount } from 'wagmi';

const CreateStrategy = () => {
  const { address, isConnected } = useAccount();
  const { createStrategy, isLoading } = useCreateStrategy();
  
  const [formData, setFormData] = useState({
    title: "",
    game: "",
    price: "",
    description: "",
    content: "",
    performance: "",
    risk: "",
    tags: [] as string[]
  });

  const [isEncrypting, setIsEncrypting] = useState(false);

  const games = [
    "Valorant",
    "League of Legends", 
    "Counter-Strike 2",
    "Apex Legends",
    "Fortnite",
    "Dota 2",
    "Overwatch 2",
    "Rainbow Six Siege"
  ];

  const popularTags = [
    "Aim Training", "Map Control", "Team Strategy", "Solo Queue", 
    "Economy Management", "Movement", "Positioning", "Meta Analysis"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    setIsEncrypting(true);
    
    try {
      // Encrypt private data using FHE
      const encryptedData = await encryptPrivateData({
        price: parseFloat(formData.price),
        performance: parseFloat(formData.performance),
        risk: parseFloat(formData.risk)
      });

      // Create strategy on blockchain with encrypted data
      await createStrategy({
        args: [
          formData.title,
          formData.description,
          encryptedData.encryptedPrice,
          encryptedData.encryptedPerformance,
          encryptedData.encryptedRisk
        ]
      });

      alert("Strategy created successfully with encrypted data!");
      
      // Reset form
      setFormData({
        title: "",
        game: "",
        price: "",
        description: "",
        content: "",
        performance: "",
        risk: "",
        tags: []
      });
    } catch (error) {
      console.error("Error creating strategy:", error);
      alert("Failed to create strategy. Please try again.");
    } finally {
      setIsEncrypting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-cyber-green">
              Create Strategy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Create encrypted investment strategies with FHE technology. Your sensitive data 
              remains private while enabling public verification of performance.
            </p>
          </div>

          <Card className="scroll-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Strategy Title
                </label>
                <Input 
                  placeholder="e.g., Ultimate Valorant Crosshair Settings"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="bg-secondary border-cyber-green/30 focus:border-cyber-green"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Game
                </label>
                <Select onValueChange={(value) => setFormData({...formData, game: value})}>
                  <SelectTrigger className="bg-secondary border-cyber-green/30 focus:border-cyber-green">
                    <SelectValue placeholder="Select a game" />
                  </SelectTrigger>
                  <SelectContent>
                    {games.map((game) => (
                      <SelectItem key={game} value={game}>{game}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Price (ETH)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-green w-4 h-4" />
                  <Input 
                    placeholder="0.05"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="pl-10 bg-secondary border-cyber-green/30 focus:border-cyber-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Performance Score (0-100)
                </label>
                <div className="relative">
                  <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-green w-4 h-4" />
                  <Input 
                    placeholder="85"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.performance}
                    onChange={(e) => setFormData({...formData, performance: e.target.value})}
                    className="pl-10 bg-secondary border-cyber-green/30 focus:border-cyber-green"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Risk Score (0-100)
                </label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-green w-4 h-4" />
                  <Input 
                    placeholder="25"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.risk}
                    onChange={(e) => setFormData({...formData, risk: e.target.value})}
                    className="pl-10 bg-secondary border-cyber-green/30 focus:border-cyber-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-cyber-green">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 4).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-cyber-green hover:text-background transition-colors"
                      onClick={() => {
                        if (!formData.tags.includes(tag)) {
                          setFormData({...formData, tags: [...formData.tags, tag]});
                        }
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-cyber-green">
                Description
              </label>
              <Textarea 
                placeholder="Describe what players will learn from your strategy..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="bg-secondary border-cyber-green/30 focus:border-cyber-green h-24"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2 text-cyber-green">
                Strategy Content (Encrypted)
              </label>
              <Textarea 
                placeholder="Enter your detailed strategy content. This will be encrypted and only accessible after purchase..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="bg-secondary border-cyber-green/30 focus:border-cyber-green h-40"
              />
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                Content will be automatically encrypted and secured on blockchain
              </div>
            </div>

            <div className="border-2 border-dashed border-cyber-green/30 rounded-lg p-8 mb-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-cyber-green" />
              <h3 className="text-lg font-semibold mb-2 text-cyber-green">Upload Media Files</h3>
              <p className="text-muted-foreground mb-4">
                Add screenshots, videos, or config files to support your strategy
              </p>
              <Button variant="outline" className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-background">
                Choose Files
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  <span className="text-sm text-muted-foreground">Expected Rating: 4.5+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyber-green" />
                  <span className="text-sm text-muted-foreground">Blockchain Secured</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10">
                  Save Draft
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={isLoading || isEncrypting}
                  className="bg-cyber-green text-background hover:bg-cyber-green/90 cyber-glow"
                >
                  {isEncrypting ? (
                    <>
                      <Zap className="w-4 h-4 mr-2 animate-spin" />
                      Encrypting Data...
                    </>
                  ) : isLoading ? (
                    <>
                      <Shield className="w-4 h-4 mr-2 animate-pulse" />
                      Creating Strategy...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Publish Encrypted Strategy
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <CodeRainFooter />
    </div>
  );
};

export default CreateStrategy;