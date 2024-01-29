class LessonNotFound extends Error {
    constructor(message) {
        super(message || "Lesson not found");
        this.name = "LessonNotFoundError";
    }
}
export default LessonNotFound;
//# sourceMappingURL=LessonNotFound.js.map