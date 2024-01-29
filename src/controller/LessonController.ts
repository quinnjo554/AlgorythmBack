import { NextFunction, Request, Response, Router } from "express";
import LessonService from "../service/LessonService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";

const lessonService = new LessonService(pool);
const lessonRouter: Router = express.Router();

lessonRouter.get(
  "/id/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lesson = await lessonService.getCoursesByUserId(parseInt(req.params.id));
      res.status(200).json({ status: "success", data: { lessons: lesson } });
    } catch (error: any) {
      next(error);
    }
  }
);

export default lessonRouter;
