import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const pasteTable = pgTable("paste", {
  id: varchar({ length: 36 }).primaryKey(), // UUID string
  content: varchar().notNull(), // Removed length limit for potentially large pastes
  exp: timestamp().notNull(), // Date for expiration
});