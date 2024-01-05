import express from "express";
import userRouter from "./controller/userController.js";
import { config as configDotenv } from "dotenv";
import { envPath } from "./config.js";

configDotenv({ path: envPath });

const app = express();
const port = 3000;

console.log(process.env.DB_USER);
app.use("/user", userRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
