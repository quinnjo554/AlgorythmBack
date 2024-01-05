import { Request, Response, Router } from "express";
import UserService from "../service/UserService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";
import UserNotFoundError from "../exceptions/UserNotFound.js";

const userService = new UserService(pool);
const userRouter: Router = express.Router();
userRouter.get("/id/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const user = await userService.getUserById(parseInt(id));
    res.status(200).json({ status: "sucess", data: { user } }); //make a response object that has a status code
  } catch (error: any) {
    res.status(404).json(new UserNotFoundError().message);
  }
});

export default userRouter;
