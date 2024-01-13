import express from "express";
import userRouter from "./controller/UserController.js";
import { setupDatabase } from "./db/CreateDatabase.js";
import { errorHandler } from "./utils/middleware.js";
const app = express();
const port = 3001;
setupDatabase();
app.use(errorHandler);
app.use("/user", userRouter);
console.log(process.env.DB_USER);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map