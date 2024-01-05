import { QueryResult } from "pg";
import { User } from "../models/User.js";
import { Pool } from "pg";

class UserRepository {
  private readonly pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findUserById(id: number): Promise<User | undefined> {
    const result: QueryResult<User> = await this.pool.query(
      "SELECT * FROM users WHERE userid = $1",
      [id]
    );
    return result.rows[0];
  }

  async findUsernameByEmail(email: string): Promise<User | undefined> {
    const result: QueryResult<User> = await this.pool.query(
      "SELECT username FROM users WHERE email = $1",
      [email]
    );
    return result.rows[0];
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const result: QueryResult<User> = await this.pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    return result.rows[0] as User;
  }
}

export default UserRepository;
