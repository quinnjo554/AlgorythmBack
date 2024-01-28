var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as CourseRepository from "../repository/CourseRepository.js";
import CourseNotFoundError from "../exceptions/CourseErrors/CourseNotFound.js";
class CourseService {
    constructor(pool) {
        this.pool = pool;
        this.courseRepo = CourseRepository;
    }
    getCoursesByUserId(courseid) {
        return __awaiter(this, void 0, void 0, function* () {
            const courseRow = yield this.courseRepo.findAllCoursesByUserId(courseid);
            if (!courseRow)
                throw new CourseNotFoundError();
            const course = courseRow;
            return course;
        });
    }
    getAllCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            const courseRow = yield this.courseRepo.findAllCourses();
            if (!courseRow)
                throw new CourseNotFoundError();
            const course = courseRow;
            return course;
        });
    }
}
export default CourseService;
//# sourceMappingURL=CourseService.js.map