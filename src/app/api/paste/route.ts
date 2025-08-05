import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { db, pasteTable } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();
    
    if (!content || content.trim() === '') {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const id = uuidv4();
    const exp = new Date();
    exp.setHours(exp.getHours() + 24); // 24 hours from now

    await db().insert(pasteTable).values({
      id,
      content,
      exp,
    });

    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    console.error('Error saving paste:', error);
    return NextResponse.json({ error: 'Failed to save paste' }, { status: 500 });
  }
}