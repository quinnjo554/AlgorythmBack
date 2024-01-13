var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserNotFoundError from "../exceptions/UserNotFound.js";
import * as UserRepository from "../repository/UserRepository.js";
class UserService {
    constructor(pool) {
        this.pool = pool;
        this.userRepo = UserRepository;
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRow = yield this.userRepo.findUserById(userId);
            if (!userRow)
                throw new UserNotFoundError();
            const user = userRow;
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRow = yield this.userRepo.findUsernameByEmail(email);
            if (!userRow)
                throw new UserNotFoundError();
            const user = userRow;
            return user;
        });
    }
}
export default UserService;
//# sourceMappingURL=UserService.js.map