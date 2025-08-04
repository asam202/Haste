import { notFound } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db, pasteTable } from '@/lib/db';
import { Textarea } from "@/components/ui/textarea";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PastePage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const [paste] = await db
      .select()
      .from(pasteTable)
      .where(eq(pasteTable.id, slug))
      .limit(1);

    if (!paste) {
      notFound();
    }

    // Check if paste has expired
    const now = new Date();
    if (paste.exp < now) {
      // Optionally, you could delete expired pastes here
      // await db.delete(pasteTable).where(eq(pasteTable.id, slug));
      notFound();
    }

    const timeLeft = Math.max(0, paste.exp.getTime() - now.getTime());
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    return (
      <main className="w-full h-screen flex flex-col">
        <div className="p-4 border-b bg-muted/30">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Paste ID: {slug}</span>
            <span>
              Expires in: {hoursLeft}h {minutesLeft}m
            </span>
          </div>
        </div>
        <div className="flex-1 p-4">
          <Textarea 
            className="h-full resize-none"
            value={paste.content}
            readOnly
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching paste:', error);
    notFound();
  }
}