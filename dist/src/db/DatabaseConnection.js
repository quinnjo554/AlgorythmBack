import pg from "pg";
import { config as configDotenv } from "dotenv";
import { envPath } from "../config.js";
configDotenv({ path: envPath });
const { Pool } = pg;
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});
export default pool;
//# sourceMappingURL=DatabaseConnection.js.map