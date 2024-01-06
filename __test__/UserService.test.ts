// __tests__/UserService.test.ts
import UserService from "../src/service/UserService.js";
import * as UserRepository from "../src/repository/UserRepository.js";
import UserNotFoundError from "../src/exceptions/UserNotFound.js";
import { Pool } from "pg";

describe("UserService", () => {
  let pool: Pool;
  let userRepo: typeof UserRepository;
  let userService: UserService;

  beforeEach(() => {
    pool = new Pool();
    userRepo = UserRepository;
    userService = new UserService(pool);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a user when getUserById is called with a valid id", async () => {
    const mockUser = {
      userid: 1,
      name: "Test User",
      userName: "testuser",
      email: "test@user.com",
    };

    jest.spyOn(userRepo, "findUserById").mockResolvedValue(mockUser);

    const user = await userService.getUserById(1);
    expect(user).toEqual(mockUser);
    expect(userRepo.findUserById).toHaveBeenCalledWith(1);
  });

  it("should throw UserNotFoundError when getUserById is called with an invalid id", async () => {
    jest.spyOn(userRepo, "findUserById").mockResolvedValue(undefined);
    await expect(userService.getUserById(1)).rejects.toThrow(UserNotFoundError);
    expect(userRepo.findUserById).toHaveBeenCalledWith(1);
  });
});
