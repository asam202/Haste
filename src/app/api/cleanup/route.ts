import { NextResponse } from 'next/server';
import { db, pasteTable } from '@/lib/db';

export async function POST() {
  try {
    const result = await db()
      .delete(pasteTable);

    return NextResponse.json({ 
      message: 'Cleanup completed',
      deletedCount: result.rowCount || 0
    });
  } catch (error) {
    console.error('Error during cleanup:', error);
    return NextResponse.json({ error: 'Cleanup failed' }, { status: 500 });
  }
}