import express from "express";
import userRouter from "./controller/UserController.js";
import courseRouter from "./controller/CourseController.js";
import { setupDatabase } from "./db/CreateDatabase.js";
import { errorHandler } from "./utils/middleware.js";
import cors from 'cors';
import lessonRouter from "./controller/LessonController.js";
import codeRouter from "./controller/CodeController.js";
const app = express();
const port = 3001;

setupDatabase();
app.use(cors());
app.use(errorHandler);
app.use(express.json());
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/lesson", lessonRouter);
app.use("/code", codeRouter)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
