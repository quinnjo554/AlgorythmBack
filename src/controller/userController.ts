import { NextFunction, Request, Response, Router } from "express";
import UserService from "../service/UserService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";

const userService = new UserService(pool);
const userRouter: Router = express.Router();

userRouter.get(
  "/id/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getUserById(parseInt(req.params.id));
      res.status(200).json({ status: "sucess", data: { user } });
    } catch (error: any) {
      next(error);
    }
  }
);
export default userRouter;
