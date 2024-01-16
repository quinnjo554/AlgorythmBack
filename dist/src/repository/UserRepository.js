var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "../db/DatabaseConnection.js";
export function findUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query("SELECT * FROM users WHERE userid = $1", [id]);
        return result.rows[0];
    });
}
export function findUsernameByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows[0];
    });
}
export function findByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query("SELECT * FROM users WHERE username = $1", [username]);
        return result.rows[0];
    });
}
export function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userName, email, profileurl } = user;
        const result = yield pool.query("INSERT INTO users (userName, email, profileurl) VALUES ($1, $2, $3) RETURNING *", [userName, email, profileurl]);
        return result.rows[0];
    });
}
//# sourceMappingURL=UserRepository.js.map