import { QueryResult } from "pg";
import { User } from "../models/User.js";
import { UserRequest } from "../request/UserRequest.js";
import pool from "../db/DatabaseConnection.js";

export async function findUserById(id: number): Promise<User | undefined> {
  const result: QueryResult<User> = await pool.query(
    "SELECT * FROM users WHERE userid = $1",
    [id]
  );
  return result.rows[0];
}

export async function findUsernameByEmail(
  email: string
): Promise<User | undefined> {
  const result: QueryResult<User> = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0];
}

export async function findByUsername(
  username: string
): Promise<User | undefined> {
  const result: QueryResult<User> = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );
  return result.rows[0] as User;
}

export async function createUser(user: UserRequest) : Promise<User | undefined> {
  const { userName, email, profileurl } = user;
  const result: QueryResult<User> = await pool.query(
    "INSERT INTO users (userName, email, profileurl) VALUES ($1, $2, $3) RETURNING *",
    [userName, email, profileurl]
  );
  return result.rows[0] as User;
}
