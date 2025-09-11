import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // This feature is temporarily disabled
  return NextResponse.json({ 
    message: 'Feature temporarily disabled',
    helpful_count: 0
  });
}