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
export function findAllCoursesByUserId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query(`SELECT Courses.courseID, Courses.courseName, Courses.courseDescription, Courses.courseSubject, Courses.courseDifficulty, UserProgress.progress 
     FROM Courses 
     INNER JOIN UserProgress ON Courses.courseID = UserProgress.courseID 
     WHERE UserProgress.userID = $1`, [id]);
        return result.rows;
    });
}
export function findAllCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield pool.query(`SELECT * FROM COURSES`);
        return result.rows;
    });
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
//# sourceMappingURL=CourseRepository.js.map