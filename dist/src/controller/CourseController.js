var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CourseService from "../service/CourseService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";
const courseService = new CourseService(pool);
const courseRouter = express.Router();
courseRouter.get("/id/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courseService.getCoursesByUserId(parseInt(req.params.id));
        res.status(200).json({ status: "sucess", data: { course } });
    }
    catch (error) {
        next(error);
    }
}));
courseRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield courseService.getAllCourses();
        res.status(200).json({ status: "sucess", data: { course } });
    }
    catch (error) {
        next(error);
    }
}));
export default courseRouter;
//# sourceMappingURL=CourseController.js.map