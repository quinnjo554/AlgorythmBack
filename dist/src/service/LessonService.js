var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as LessonRepository from "../repository/LessonRepository.js";
import LessonNotFound from "../exceptions/LessonErrors/LessonNotFound.js";
class LessonService {
    constructor(pool) {
        this.pool = pool;
        this.lessonRepo = LessonRepository;
    }
    getCoursesByUserId(lessonid) {
        return __awaiter(this, void 0, void 0, function* () {
            const lessonRow = yield this.lessonRepo.findAllLessonsByCourseId(lessonid);
            if (!lessonRow)
                throw new LessonNotFound();
            const lesson = lessonRow;
            lesson.sort((a, b) => a.lessonid - b.lessonid);
            return lesson;
        });
    }
}
export default LessonService;
//# sourceMappingURL=LessonService.js.map