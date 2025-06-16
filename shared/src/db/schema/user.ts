import { relations } from "drizzle-orm"
import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core"

import role from "./role"

const user = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }),
  phone: varchar("phone", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  roleId: serial("role_id"),
  externalAuthProviderId: varchar("external_auth_provider_id", { length: 255 })
    .notNull()
    .unique(),
  externalAuthProvider: varchar("external_auth_provider", {
    length: 255,
  }).default("clerk"),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
})

export const userRelations = relations(user, ({ one }) => ({
  role: one(role),
}))

export default user

export type UserModel = typeof user.$inferSelect
