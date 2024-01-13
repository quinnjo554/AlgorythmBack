var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// __tests__/UserService.test.ts
import UserService from "../src/service/UserService.js";
import * as UserRepository from "../src/repository/UserRepository.js";
import UserNotFoundError from "../src/exceptions/UserNotFound.js";
import { Pool } from "pg";
describe("UserService", () => {
    let pool;
    let userRepo;
    let userService;
    beforeEach(() => {
        pool = new Pool();
        userRepo = UserRepository;
        userService = new UserService(pool);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should return a user when getUserById is called with a valid id", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockUser = {
            userid: 1,
            name: "Test User",
            userName: "testuser",
            email: "test@user.com",
        };
        jest.spyOn(userRepo, "findUserById").mockResolvedValue(mockUser);
        const user = yield userService.getUserById(1);
        expect(user).toEqual(mockUser);
        expect(userRepo.findUserById).toHaveBeenCalledWith(1);
    }));
    it("should throw UserNotFoundError when getUserById is called with an invalid id", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(userRepo, "findUserById").mockResolvedValue(undefined);
        yield expect(userService.getUserById(1)).rejects.toThrow(UserNotFoundError);
        expect(userRepo.findUserById).toHaveBeenCalledWith(1);
    }));
});
//# sourceMappingURL=UserService.test.js.map