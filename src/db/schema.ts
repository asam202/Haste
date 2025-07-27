import { integer, pgTable, varchar,date } from "drizzle-orm/pg-core";

export const usersTable = pgTable("paste", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar().notNull(),
  exp_date: date().notNull(),
});
