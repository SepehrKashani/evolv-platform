import {
  pgTable,
  serial,
  varchar,
  unique,
  timestamp,
} from "drizzle-orm/pg-core"

const role = pgTable("roles", {
  id: serial("id").primaryKey(),
  title: varchar("name", { length: 255 }).notNull().unique(),
  key: varchar("key", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
})

export default role

export type RoleModel = typeof role.$inferSelect
