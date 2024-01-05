import UserNotFoundError from "../exceptions/UserNotFound.js";
import { User } from "../models/User.js";
import UserRepository from "../repository/UserRepository.js";
import { Pool } from "pg";

class UserService {
  private readonly pool: Pool;
  private userRepo: UserRepository;

  constructor(pool: Pool) {
    this.pool = pool;
    this.userRepo = new UserRepository(this.pool);
  }

  async getUserById(userId: number): Promise<User | undefined> {
    try {
      const userRow = await this.userRepo.findUserById(userId);
      if (!userRow) throw new UserNotFoundError();
      const user: User = userRow as User;
      return user;
    } catch (error) {
      console.error("Error executing SQL query:", error);
      throw new Error("Internal Server Error");
    }
  }
}

export default UserService;
