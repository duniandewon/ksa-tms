import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const db = drizzle({
  schema,
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
});

export default db;
