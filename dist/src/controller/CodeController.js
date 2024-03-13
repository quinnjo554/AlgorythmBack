var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CodeService from "../service/CodeService.js";
import express from "express";
import pool from "../db/DatabaseConnection.js";
const codeService = new CodeService(pool);
const codeRouter = express.Router();
codeRouter.get("/id/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codeQA = yield codeService.getQuestionsAndAnswersByLessonId(parseInt(req.params.id));
        res.status(200).json({ status: "success", data: { codeQA } });
    }
    catch (error) {
        next(error);
    }
}));
export default codeRouter;
//# sourceMappingURL=CodeController.js.map