import UserNotFoundError from "../exceptions/UserNotFound.js";
import { User } from "../models/User.js";
import { Pool } from "pg";
import * as UserRepository from "../repository/UserRepository.js";
class UserService {
  private readonly pool: Pool;
  private readonly userRepo: typeof UserRepository;
  constructor(pool: Pool) {
    this.pool = pool;
    this.userRepo = UserRepository;
  }

  async getUserById(userId: number): Promise<User | undefined> {
    const userRow = await this.userRepo.findUserById(userId);
    if (!userRow) throw new UserNotFoundError();
    const user: User = userRow as User;
    return user;
  }
}

export default UserService;
