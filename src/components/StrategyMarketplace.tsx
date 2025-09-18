import { StrategyCard } from "./StrategyCard";

const FEATURED_STRATEGIES = [
  {
    title: "Ultimate Valorant Crosshair Settings",
    author: "ProAim_Master",
    price: "0.05",
    rating: 4.9,
    game: "Valorant",
    description: "Secret crosshair configurations used by top 500 radiant players. Includes sensitivity optimization and custom keybinds."
  },
  {
    title: "League of Legends Jungle Pathing",
    author: "JungleKing",
    price: "0.08",
    rating: 4.8,
    game: "League of Legends",
    description: "Advanced jungle routes and gank timing strategies that got me to Challenger rank. Early game domination guaranteed."
  },
  {
    title: "CS2 Smoke Lineups Collection",
    author: "SmokeWizard",
    price: "0.12",
    rating: 4.7,
    game: "Counter-Strike 2",
    description: "100+ pixel-perfect smoke lineups for every competitive map. Includes one-ways and execute strategies."
  },
  {
    title: "Apex Legends Movement Guide",
    author: "MovementGod",
    price: "0.07",
    rating: 4.9,
    game: "Apex Legends",
    description: "Master advanced movement techniques: tap strafing, wall bouncing, and slide canceling. Become unpredictable."
  },
  {
    title: "Fortnite Build Techniques",
    author: "BuildMaster",
    price: "0.06",
    rating: 4.6,
    game: "Fortnite",
    description: "Lightning-fast building patterns and edit courses. Outbuild anyone in zero build and build modes."
  },
  {
    title: "Dota 2 Itemization Secrets",
    author: "ItemSage",
    price: "0.10",
    rating: 4.8,
    game: "Dota 2",
    description: "Situational item builds and timing optimizations. Counter any strategy with perfect itemization choices."
  }
];

export const StrategyMarketplace = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-cyber-green">
            Featured Strategy Scrolls
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover encrypted gaming secrets from the world's best players. 
            Each strategy is locked until purchase and verified for authenticity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_STRATEGIES.map((strategy, index) => (
            <StrategyCard
              key={index}
              title={strategy.title}
              author={strategy.author}
              price={strategy.price}
              rating={strategy.rating}
              game={strategy.game}
              description={strategy.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Want to sell your own strategies?
          </p>
          <button className="text-cyber-green hover:text-cyber-blue transition-colors font-semibold">
            Become a Strategy Creator →
          </button>
        </div>
      </div>
    </section>
  );
};