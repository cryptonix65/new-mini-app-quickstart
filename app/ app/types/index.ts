mkdir -p app/types
cat > app/types/index.ts << 'EOF'
export interface Quest {
  id: string;
  title: string;
  description: string;
  category: 'defi' | 'nft' | 'social' | 'gaming';
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  completed: boolean;
  verificationUrl?: string;
  icon: string;
}

export interface UserProgress {
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  questsCompleted: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  displayName?: string;
  points: number;
  questsCompleted: number;
}
EOF
