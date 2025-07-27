import { integer, pgTable, text,date } from "drizzle-orm/pg-core";

export const usersTable = pgTable("paste", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: text("content").notNull(), // The paste content
  exp_date: date().notNull(),
});
