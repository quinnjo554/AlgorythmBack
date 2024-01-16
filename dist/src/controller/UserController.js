var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserService from "../service/UserService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";
const userService = new UserService(pool);
const userRouter = express.Router();
userRouter.get("/id/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.getUserById(parseInt(req.params.id));
        res.status(200).json({ status: "sucess", data: { user } });
    }
    catch (error) {
        next(error);
    }
}));
userRouter.get("/email/:email", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService.getUserByEmail(req.params.email);
        res.status(200).json({ status: "sucess", data: { user } });
    }
    catch (error) {
        next(error);
    }
}));
userRouter.post("/create", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userMade = req.body;
        const response = yield userService.createUser(userMade);
        res.status(200).json({ status: response });
    }
    catch (error) {
        next(error);
    }
}));
export default userRouter;
//# sourceMappingURL=UserController.js.map