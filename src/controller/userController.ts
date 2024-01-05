import { Request, Response, Router } from "express";
import pg from "pg";
import UserService from "../service/userService.js";
import express from "express";
import "dotenv/config";
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
});

const userService = new UserService(pool);
const userRouter: Router = express.Router();

userRouter.get("/id/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const user = await userService.getUserById(parseInt(id));
    res.json(user);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
});

export default userRouter;
