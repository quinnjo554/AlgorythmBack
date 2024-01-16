import UserNotFoundError from "../exceptions/UserNotFound.js";
import { User } from "../models/User.js";
import { Pool } from "pg";
import * as UserRepository from "../repository/UserRepository.js";
import { UserRequest } from "../request/UserRequest.js";
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
  async getUserByEmail(email:string):Promise<User | undefined>{
    const userRow = await this.userRepo.findUsernameByEmail(email);
    if(!userRow) throw new UserNotFoundError();
    const user: User = userRow as User;
    return user;
  }
  async createUser(user : UserRequest):Promise<string>{
    const userRow = await this.userRepo.createUser(user);
    if(!userRow){}; //UserNotCreated 
    return "User Created Successfully"; //change this to something more meaningful
  }
}

export default UserService;
