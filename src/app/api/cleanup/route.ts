import { NextResponse } from 'next/server';
import { db, pasteTable } from '@/lib/db';
import { lt } from 'drizzle-orm';

export async function POST() {
  try {
    const now = new Date();
    const result = await db()
      .delete(pasteTable)
      .where(lt(pasteTable.exp, now));

    return NextResponse.json({ 
      message: 'Cleanup completed',
      deletedCount: result.rowCount || 0
    });
  } catch (error) {
    console.error('Error during cleanup:', error);
    return NextResponse.json({ error: 'Cleanup failed' }, { status: 500 });
  }
}