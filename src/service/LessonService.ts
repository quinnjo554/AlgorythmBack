import { Pool } from "pg";
import * as LessonRepository from "../repository/LessonRepository.js"
import { Lesson } from "../models/Lesson.js";
import LessonNotFound from "../exceptions/LessonErrors/LessonNotFound.js";

class LessonService {
  private readonly pool: Pool;
  private readonly lessonRepo: typeof LessonRepository;
  constructor(pool: Pool) {
    this.pool = pool;
    this.lessonRepo = LessonRepository;
  }

  async getCoursesByUserId(lessonid: number): Promise<Lesson[] | undefined> {
    const lessonRow = await this.lessonRepo.findAllLessonsByCourseId(lessonid);
    if (!lessonRow) throw new LessonNotFound();
    const lesson: Lesson[] = lessonRow as Lesson[]; 
    lesson.sort((a, b) => a.lessonid - b.lessonid); //sort because first lesson will have smallest id 
    return lesson;
  }
}

export default LessonService