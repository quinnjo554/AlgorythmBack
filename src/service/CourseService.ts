import { Pool } from "pg";
import * as CourseRepository from "../repository/CourseRepository.js"
import { Course } from "../models/Course.js";
import CourseNotFoundError from "../exceptions/CourseErrors/CourseNotFound.js";
class CourseService {
  private readonly pool: Pool;
  private readonly courseRepo: typeof CourseRepository;
  constructor(pool: Pool) {
    this.pool = pool;
    this.courseRepo = CourseRepository;
  }

  async getCoursesByUserId(courseid: number): Promise<Course[] | undefined> {
    const courseRow = await this.courseRepo.findAllCoursesByUserId(courseid);
    if (!courseRow) throw new CourseNotFoundError();
    const course: Course[] = courseRow as Course[];
    return course;
  }

  async getAllCourses(): Promise<Course[] | undefined>{
    const courseRow = await this.courseRepo.findAllCourses();
    if (!courseRow) throw new CourseNotFoundError();
    const course: Course[] = courseRow as Course[];
    return course;
  }

}

export default CourseService;