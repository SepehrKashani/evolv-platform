import type db from "@shared/db"
import roles from "./data/roles.json"
import { role } from "../schema"

export default async function seed(db: db) {
  await db.insert(role).values(roles)
}
