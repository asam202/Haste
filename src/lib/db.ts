import { drizzle } from 'drizzle-orm/neon-http';
import { pasteTable } from '@/db/schema';

export const db = drizzle(process.env.DATABASE_URL!);

export { pasteTable };