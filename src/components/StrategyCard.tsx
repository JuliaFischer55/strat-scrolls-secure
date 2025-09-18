import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Star, User, Zap } from "lucide-react";

interface StrategyCardProps {
  title: string;
  author: string;
  price: string;
  rating: number;
  game: string;
  description: string;
  isEncrypted?: boolean;
}

export const StrategyCard = ({ 
  title, 
  author, 
  price, 
  rating, 
  game, 
  description,
  isEncrypted = true 
}: StrategyCardProps) => {
  return (
    <Card className="scroll-card group relative overflow-hidden">
      <div className="absolute top-3 right-3">
        {isEncrypted && (
          <div className="p-2 bg-mystery-purple/20 rounded-full border border-mystery-purple/30">
            <Lock className="w-4 h-4 text-mystery-purple" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <Badge variant="outline" className="border-cyber-green/50 text-cyber-green mb-2">
            {game}
          </Badge>
          <h3 className="text-lg font-bold text-parchment group-hover:text-cyber-green transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gold">
            {price} ETH
          </div>
          <Button variant="cyber" size="sm" className="gap-2">
            <Zap className="w-3 h-3" />
            Purchase
          </Button>
        </div>
      </div>
    </Card>
  );
};