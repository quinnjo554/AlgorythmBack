import express from "express";
import userRouter from "./controller/UserController.js";
import { setupDatabase } from "./db/CreateDatabase.js";
import UserNotFoundError from "./exceptions/UserNotFound.js";
import { errorHandler } from "./utils/middleware.js";

const app = express();
const port = 3000;

setupDatabase();
app.use(errorHandler);
app.use("/user", userRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
