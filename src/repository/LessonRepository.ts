import { QueryResult } from "pg";
import pool from "../db/DatabaseConnection.js";
import { Lesson } from "../models/Lesson.js";


export async function findAllLessonsByCourseId(id: number): Promise<Lesson[] | undefined> {
  const result: QueryResult<Lesson> = await pool.query(
    `SELECT * FROM Lessons WHERE courseID = $1`,
    [id]
  );
  return result.rows;
}
