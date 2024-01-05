import { User } from "../models/User.js";
import { Pool } from "pg";
class UserService {
  private readonly pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }
  async getUserById(userId: number) {
    try {
      const result = await this.pool.query(
        "SELECT * FROM users WHERE id = $1",
        [userId]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error executing SQL query:", error);
      throw new Error("Internal Server Error");
    }
  }
}
export default UserService;
