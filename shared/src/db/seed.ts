import { Table, getTableName, sql } from "drizzle-orm"
import env from "@shared/env"

import { db, connection } from "@shared/db"
import * as schema from "@shared/db/schema"
import * as seeds from "./seeds"

if (!env.DB_SEEDING) {
  throw new Error('You must set DB_SEEDING to "true" when running seeds')
}

async function resetTable(db: db, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  )
}

for (const table of [schema.role, schema.user]) {
  // await db.delete(table); // clear tables without truncating / resetting ids
  await resetTable(db, table)
}

await seeds.role(db)

await connection.end()
