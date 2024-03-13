import { NextFunction, Request, Response, Router } from "express";
import UserService from "../service/UserService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";
import { UserRequest } from "../request/UserRequest.js";

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
userRouter.get("/email/:email", async (req:Request, res: Response, next:NextFunction) =>{
  try{
    const user = await userService.getUserByEmail(req.params.email);
    res.status(200).json({status : "sucess", data: {user}});
  } catch (error : any){
    next(error);
  }
});
userRouter.post("/create",async (req:Request, res: Response, next:NextFunction) =>{
  try{
    const userToAdd = req.body;
    const response = await userService.createUser(userToAdd);
    res.status(200).json({status: "success", data:{response}});
  }catch(error : any){
    next(error);
  }

});
export default userRouter;
