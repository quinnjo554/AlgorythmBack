import { NextFunction, Request, Response, Router } from "express";
import CourseService from "../service/CourseService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";

const courseService = new CourseService(pool);
const courseRouter: Router = express.Router();

courseRouter.get(
  "/id/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const course = await courseService.getCoursesByUserId(parseInt(req.params.id));
      res.status(200).json({ status: "success", data: { course } });
    } catch (error: any) {
      next(error);
    }
  }
);
courseRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const course = await courseService.getAllCourses();
      res.status(200).json({ status: "success", data: { course } });
    } catch (error: any) {
      next(error);
    }
  }
);
export default courseRouter;
