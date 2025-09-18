import { Header } from "@/components/Header";
import { CodeRainFooter } from "@/components/CodeRainFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Users, TrendingUp, Gift, Zap } from "lucide-react";

const Rewards = () => {
  const userStats = {
    totalEarned: "2.45",
    strategiesSold: 28,
    averageRating: 4.8,
    followers: 156,
    level: 3,
    nextLevelProgress: 65
  };

  const achievements = [
    { name: "First Strategy", description: "Published your first strategy", completed: true, icon: Star },
    { name: "Rising Creator", description: "Earned 1 ETH from strategies", completed: true, icon: TrendingUp },
    { name: "Community Favorite", description: "Received 100+ ratings", completed: false, icon: Users },
    { name: "Master Strategist", description: "Published 50+ strategies", completed: false, icon: Trophy }
  ];

  const rewardTiers = [
    { level: 1, name: "Apprentice", minEarnings: "0", rewards: ["Basic Creator Badge", "Strategy Analytics"] },
    { level: 2, name: "Strategist", minEarnings: "0.5", rewards: ["Featured Placement", "Priority Support"] },
    { level: 3, name: "Expert", minEarnings: "2.0", rewards: ["Reduced Fees (8%)", "Custom Profile"], current: true },
    { level: 4, name: "Master", minEarnings: "5.0", rewards: ["Reduced Fees (5%)", "Exclusive Events"] },
    { level: 5, name: "Legend", minEarnings: "10.0", rewards: ["Reduced Fees (3%)", "Revenue Sharing"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-cyber-green">
              Creator Rewards
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Track your earnings, level up your creator status, and unlock exclusive rewards 
              for sharing your gaming expertise.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="scroll-card text-center">
              <div className="text-3xl font-bold text-cyber-green mb-2">
                {userStats.totalEarned} ETH
              </div>
              <div className="text-sm text-muted-foreground">Total Earned</div>
            </Card>
            
            <Card className="scroll-card text-center">
              <div className="text-3xl font-bold text-cyber-blue mb-2">
                {userStats.strategiesSold}
              </div>
              <div className="text-sm text-muted-foreground">Strategies Sold</div>
            </Card>
            
            <Card className="scroll-card text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-gold">{userStats.averageRating}</span>
                <Star className="w-6 h-6 text-gold fill-current" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>
            
            <Card className="scroll-card text-center">
              <div className="text-3xl font-bold text-mystery-purple mb-2">
                {userStats.followers}
              </div>
              <div className="text-sm text-muted-foreground">Followers</div>
            </Card>
          </div>

          {/* Creator Level */}
          <Card className="scroll-card p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyber-green rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-green">Creator Level {userStats.level}</h3>
                  <p className="text-muted-foreground">Expert Strategist</p>
                </div>
              </div>
              <Badge className="bg-cyber-green text-background">
                Level {userStats.level}
              </Badge>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress to Level {userStats.level + 1}</span>
                <span>{userStats.nextLevelProgress}%</span>
              </div>
              <Progress value={userStats.nextLevelProgress} className="h-3" />
            </div>
            
            <p className="text-sm text-muted-foreground">
              Earn 1.55 ETH more to reach Master level and unlock reduced fees!
            </p>
          </Card>

          {/* Achievements */}
          <Card className="scroll-card p-6 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-cyber-green flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                    achievement.completed 
                      ? 'bg-cyber-green/10 border-cyber-green/30' 
                      : 'bg-secondary/50 border-border'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.completed ? 'bg-cyber-green' : 'bg-muted'
                  }`}>
                    <achievement.icon className={`w-5 h-5 ${
                      achievement.completed ? 'text-background' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      achievement.completed ? 'text-cyber-green' : 'text-foreground'
                    }`}>
                      {achievement.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Reward Tiers */}
          <Card className="scroll-card p-6">
            <h3 className="text-2xl font-bold mb-6 text-cyber-green flex items-center gap-2">
              <Gift className="w-6 h-6" />
              Reward Tiers
            </h3>
            
            <div className="space-y-4">
              {rewardTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    tier.current 
                      ? 'bg-cyber-green/10 border-cyber-green ring-2 ring-cyber-green/20' 
                      : index < userStats.level 
                        ? 'bg-muted/30 border-muted' 
                        : 'border-border'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      tier.current ? 'bg-cyber-green' : index < userStats.level ? 'bg-muted' : 'bg-secondary'
                    }`}>
                      <span className={`font-bold ${
                        tier.current ? 'text-background' : 'text-foreground'
                      }`}>
                        {tier.level}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold ${tier.current ? 'text-cyber-green' : 'text-foreground'}`}>
                          {tier.name}
                        </h4>
                        {tier.current && (
                          <Badge className="bg-cyber-green text-background text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Minimum {tier.minEarnings} ETH earned
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex flex-wrap justify-end gap-1 mb-1">
                      {tier.rewards.map((reward, rewardIndex) => (
                        <Badge 
                          key={rewardIndex} 
                          variant="outline" 
                          className={`text-xs ${
                            tier.current ? 'border-cyber-green text-cyber-green' : ''
                          }`}
                        >
                          {reward}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
      <CodeRainFooter />
    </div>
  );
};

export default Rewards;