class CourseNotFoundError extends Error {
    constructor(message) {
        super(message || "Course not found");
        this.name = "CourseNotFoundError";
    }
}
export default CourseNotFoundError;
//# sourceMappingURL=CourseNotFound.js.map