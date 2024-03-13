import { NextFunction, Request, Response, Router } from "express";
import CodeService from "../service/CodeService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";

const codeService = new CodeService(pool);
const codeRouter: Router = express.Router();

codeRouter.get(
  "/id/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const codeQA = await codeService.getQuestionsAndAnswersByLessonId(parseInt(req.params.id));
      res.status(200).json({ status: "success", data: { codeQA } });
    } catch (error: any) {
      next(error);
    }
  }
);

export default codeRouter;
