class CourseNotFoundError extends Error {
  constructor(message?: string) {
    super(message || "Course not found");
    this.name = "CourseNotFoundError";
  }
}

export default CourseNotFoundError;
