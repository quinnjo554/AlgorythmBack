import pool from "./DatabaseConnection.js";
//this feels gross
// Function to setup database
export async function setupDatabase() {
  await createUserTable();
  await createCourse();
  await createLesson();
  await createCodeQuestion();
  await createCodeAnswer();
  await createNote();
  await createEnrolledIn();
}

async function createUserTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        userID SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        profileUrl VARCHAR(255)
      )
    `);
    console.log("Users table created successfully.");
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createCourse() {
  try {
    await pool.query(`
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
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createLesson() {
  try {
    await pool.query(`
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
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createNote() {
  try {
    await pool.query(`
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
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createEnrolledIn() {
  try {
    await pool.query(`
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
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createCodeQuestion() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS CodeQuestions (
        questionID SERIAL PRIMARY KEY,
        questionText TEXT NOT NULL,
        lessonID INT,
        FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID)
      )
    `);
    console.log("CodeQuestions table created successfully.");
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}

async function createCodeAnswer() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS CodeAnswers (
        answerID SERIAL PRIMARY KEY,
        answerCode TEXT,
        output TEXT,
        questionID INT,
        FOREIGN KEY (questionID) REFERENCES CodeQuestions(questionID)
      )
    `);
    console.log("CodeAnswers table created successfully.");
  } catch (err) {
    console.error("Error setting up database:", err);
  }
}
