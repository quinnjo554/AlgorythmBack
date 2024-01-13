var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "./DatabaseConnection.js";
//this feels gross
// Function to setup database
export function setupDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createUserTable();
        yield createCourse();
        yield createLesson();
        yield createCodeQuestion();
        yield createCodeAnswer();
        yield createNote();
        yield createEnrolledIn();
    });
}
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        userID SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        profileUrl VARCHAR(255)
      )
    `);
            console.log("Users table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createCourse() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS Courses (
        courseID SERIAL PRIMARY KEY,
        courseName VARCHAR(100) NOT NULL,
        courseDescription VARCHAR(400) NOT NULL,
        courseSubject VARCHAR(100) NOT NULL,
        userID INT,
        FOREIGN KEY (userID) REFERENCES Users(userID)
      )
    `);
            console.log("Courses table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createLesson() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS Lessons (
        lessonID SERIAL PRIMARY KEY,
        lessonName VARCHAR(100) NOT NULL,
        imageUrl VARCHAR(355),
        gifURL VARCHAR(355),
        courseID INT,
        FOREIGN KEY (courseID) REFERENCES Courses(courseID)
      )
    `);
            console.log("Lessons table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createNote() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS Notes (
        noteID SERIAL PRIMARY KEY,
        noteContent TEXT,
        userID INT,
        lessonID INT,
        noteCreated TIMESTAMP,
        FOREIGN KEY (userID) REFERENCES Users(userID),
        FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID)
      )
    `);
            console.log("Notes table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createEnrolledIn() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS Enrolled (
        userID INT,
        courseID INT,
        enrollmentDate TIMESTAMP,
        PRIMARY KEY (userID, courseID),
        FOREIGN KEY (userID) REFERENCES Users(userID),
        FOREIGN KEY (courseID) REFERENCES Courses(courseID)
      )
    `);
            console.log("Enrolled table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createCodeQuestion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS CodeQuestions (
        questionID SERIAL PRIMARY KEY,
        questionText TEXT NOT NULL,
        lessonID INT,
        FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID)
      )
    `);
            console.log("CodeQuestions table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
function createCodeAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query(`
      CREATE TABLE IF NOT EXISTS CodeAnswers (
        answerID SERIAL PRIMARY KEY,
        answerCode TEXT,
        output TEXT,
        questionID INT,
        FOREIGN KEY (questionID) REFERENCES CodeQuestions(questionID)
      )
    `);
            console.log("CodeAnswers table created successfully.");
        }
        catch (err) {
            console.error("Error setting up database:", err);
        }
    });
}
//# sourceMappingURL=CreateDatabase.js.map