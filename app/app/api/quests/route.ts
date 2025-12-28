mkdir -p app/api/quests
cat > app/api/quests/route.ts << 'EOF'
import { NextResponse } from 'next/server';
import { generateDailyQuests } from '@/app/utils/quests';

export async function GET() {
  try {
    const quests = generateDailyQuests();
    return NextResponse.json({ quests, success: true });
  } catch (error) {
    console.error('Quest generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate quests' }, 
      { status: 500 }
    );
  }
}
EOF
