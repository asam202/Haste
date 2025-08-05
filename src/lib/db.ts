import { drizzle } from 'drizzle-orm/neon-http';
import { pasteTable } from '@/db/schema';

// Lazy initialization of database connection
let _db: ReturnType<typeof drizzle> | null = null;

export const db = () => {
  if (!_db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    _db = drizzle(process.env.DATABASE_URL);
  }
  return _db;
};

export { pasteTable };