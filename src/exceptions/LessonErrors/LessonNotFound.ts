class LessonNotFound extends Error {
  constructor(message?: string) {
    super(message || "Lesson not found");
    this.name = "LessonNotFoundError";
  }
}

export default LessonNotFound;