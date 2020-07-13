import { Injectable, HttpException } from '@nestjs/common';
import { COURSES } from './courses.mock';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { resolve } from 'path';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.courses);
    });
  }

  // Find out about this
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getCourse(courseId): Promise<any> {
    const id = Number(courseId);
    return new Promise(resolve => {
      const course = this.courses.find(course => course.id === id);
      if (!course) {
        throw new HttpException('Course does not exist', 404);
      }
      resolve(course);
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addCourse(course):Promise<any> {
      return new Promise(resolve => {
          this.courses.push(course);
          resolve(this.courses);
      })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  deleteCourse(courseId): Promise<any> {
      const id = Number(courseId);
      return new Promise(resolve => {
          const index = this.courses.findIndex(course => course.id = id);
          if(index === -1){
              throw new HttpException('Course does not exist', 404)
          }
          this.courses.splice(index, 1);
          resolve(this.courses)
      })
  }
}
