import { useEffect, useState } from "react";

const CODE_SNIPPETS = [
  "encrypt(strategy_data)",
  "unlock_on_payment()",
  "verify_transaction()",
  "decode_secrets()",
  "mint_strategy_nft()",
  "validate_owner()",
  "execute_strategy()",
  "fetch_game_data()",
  "calculate_profit()",
  "secure_transfer()",
  "generate_key()",
  "authenticate_user()",
  "process_payment()",
  "unlock_content()",
  "verify_signature()",
];

export const CodeRainFooter = () => {
  const [rainDrops, setRainDrops] = useState<Array<{
    id: number;
    text: string;
    x: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const drops = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setRainDrops(drops);
  }, []);

  return (
    <footer className="relative h-32 bg-gradient-to-t from-background to-transparent overflow-hidden border-t border-cyber-green/20">
      <div className="absolute inset-0">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="code-rain absolute text-xs opacity-70"
            style={{
              left: `${drop.x}%`,
              animationDelay: `${drop.delay}s`,
            }}
          >
            {drop.text}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-8 text-center">
        <p className="text-muted-foreground text-sm">
          Secure • Encrypted • Decentralized Gaming Knowledge
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          © 2024 Encrypted Strategy Market. All strategies protected by blockchain encryption.
        </p>
      </div>
    </footer>
  );
};