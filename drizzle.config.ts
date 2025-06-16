import { defineConfig } from "drizzle-kit"
import env from "@shared/env"

export default defineConfig({
  schema: "./shared/src/db/schema/index.ts",
  out: "./shared/src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
})
