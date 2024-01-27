import express from "express";
import userRouter from "./controller/UserController.js";
import { setupDatabase } from "./db/CreateDatabase.js";
import { errorHandler } from "./utils/middleware.js";
import cors from 'cors';
const app = express();
const port = 3001;
setupDatabase();
app.use(cors());
app.use(errorHandler);
app.use(express.json());
app.use("/user", userRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map