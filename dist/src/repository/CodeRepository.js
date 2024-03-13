var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "../db/DatabaseConnection.js";
export function findAllQuestionsAndAnswersByLessonId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query(`SELECT *
    FROM CodeQuestions
    INNER JOIN CodeAnswers
    ON CodeQuestions.questionID = CodeAnswers.questionID
    WHERE CodeQuestions.lessonID = $1
    LIMIT 1;`, [id]);
        return result.rows[0];
    });
}
//# sourceMappingURL=CodeRepository.js.map