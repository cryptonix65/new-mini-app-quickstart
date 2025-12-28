mkdir -p app/utils
cat > app/utils/quests.ts << 'EOF'
import { Quest } from '../types';

export const QUEST_TEMPLATES: Omit<Quest, 'id' | 'completed'>[] = [
  {
    title: "Swap on Uniswap",
    description: "Make a token swap on Uniswap Base",
    category: 'defi',
    difficulty: 'easy',
    points: 10,
    verificationUrl: 'https://app.uniswap.org',
    icon: '🔄'
  },
  {
    title: "Mint on Zora",
    description: "Mint any NFT on Zora Base network",
    category: 'nft',
    difficulty: 'easy',
    points: 10,
    verificationUrl: 'https://zora.co',
    icon: '🖼️'
  },
  {
    title: "Share on Farcaster",
    description: "Cast about Base ecosystem",
    category: 'social',
    difficulty: 'easy',
    points: 10,
    verificationUrl: 'https://warpcast.com',
    icon: '📢'
  },
  {
    title: "Provide Liquidity",
    description: "Add liquidity to any Base DEX pool",
    category: 'defi',
    difficulty: 'medium',
    points: 25,
    icon: '💧'
  },
  {
    title: "Play Base Game",
    description: "Play any game in Base ecosystem for 10 mins",
    category: 'gaming',
    difficulty: 'medium',
    points: 25,
    icon: '🎮'
  }
];

export function generateDailyQuests(date: Date = new Date()): Quest[] {
  const seed = date.toISOString().split('T')[0];
  const random = seedRandom(seed);
  
  const shuffled = [...QUEST_TEMPLATES].sort(() => random() - 0.5);
  const selectedQuests = shuffled.slice(0, 5);
  
  return selectedQuests.map((template, index) => ({
    ...template,
    id: `quest-${seed}-${index}`,
    completed: false
  }));
}

function seedRandom(seed: string): () => number {
  let value = 0;
  for (let i = 0; i < seed.length; i++) {
    value = ((value << 5) - value) + seed.charCodeAt(i);
    value = value & value;
  }
  return function() {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}
EOF
