import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // This feature is temporarily disabled
  return NextResponse.json({ 
    message: 'Feature temporarily disabled',
    helpful_count: 0
  });
}