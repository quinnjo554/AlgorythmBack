import { QueryResult } from "pg";
import { Course } from "../models/Course.js";
import { UserRequest } from "../request/UserRequest.js";
import pool from "../db/DatabaseConnection.js";

export async function findAllCoursesByUserId(id: number): Promise<Course[] | undefined> {
  const result: QueryResult<Course> = await pool.query(
    `SELECT Courses.courseID, Courses.courseName, Courses.courseDescription, Courses.courseSubject, Courses.courseDifficulty, UserProgress.progress 
     FROM Courses 
     INNER JOIN UserProgress ON Courses.courseID = UserProgress.courseID 
     WHERE UserProgress.userID = $1`,
    [id]
  );
  return result.rows;
}
export async function findAllCourses(): Promise<Course[] | undefined> {
  const result: QueryResult<Course> = await pool.query(
    `SELECT * FROM COURSES`
  );
  return result.rows;
}
/**
 * export async function updateUserProgress(userId: number, courseId: number, newProgress: number): Promise<void> {
  await pool.query(
    `UPDATE UserProgress 
     SET progress = $1 
     WHERE userID = $2 AND courseID = $3`,
    [newProgress, userId, courseId]
  );
} place in userProgress
 */