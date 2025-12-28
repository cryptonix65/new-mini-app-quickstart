mkdir -p app/api/verify-quest
cat > app/api/verify-quest/route.ts << 'EOF'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { questId } = await request.json();
    
    // MVP: Auto-approve all quests
    return NextResponse.json({ 
      success: true, 
      pointsEarned: 10,
      message: 'Quest completed!' 
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed' }, 
      { status: 500 }
    );
  }
}
EOF
