import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { user: string } }) {
  const userId = params.user; 
  return NextResponse.json({ message: `User ID is ${userId}` });
}