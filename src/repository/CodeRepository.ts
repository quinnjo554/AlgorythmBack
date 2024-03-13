import { QueryResult } from "pg";
import pool from "../db/DatabaseConnection.js";
import { Code } from "../models/Code.js";

export async function findAllQuestionsAndAnswersByLessonId(id: number): Promise<Code | undefined> {
  const result: QueryResult<Code> = await pool.query(
    `SELECT *
    FROM CodeQuestions
    INNER JOIN CodeAnswers
    ON CodeQuestions.questionID = CodeAnswers.questionID
    WHERE CodeQuestions.lessonID = $1
    LIMIT 1;`,
    [id]
  );
  return result.rows[0];
}
