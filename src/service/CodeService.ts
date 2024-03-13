import { Pool } from "pg";
import * as CodeRepository from "../repository/CodeRepository.js"
import CourseNotFoundError from "../exceptions/CourseErrors/CourseNotFound.js";
import { Code } from "../models/Code.js";
class CodeService {
  private readonly pool: Pool;
  private readonly codeRepo: typeof CodeRepository;
  constructor(pool: Pool) {
    this.pool = pool;
    this.codeRepo = CodeRepository;
  }

  async getQuestionsAndAnswersByLessonId(codeId: number): Promise<Code | undefined> {
    const codeRow = await this.codeRepo.findAllQuestionsAndAnswersByLessonId(codeId);
    if (!codeRow) throw new CourseNotFoundError();
    const code: Code = codeRow as Code;
    return code;
  }



}

export default CodeService;
