import { Controller, Get, Param, Post, Delete, Query, Body } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private cousrsesService: CoursesService){};

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get()
    async getCourses() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const courses = await this.cousrsesService.getCourses();
        return courses
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get(':courseId')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async getCourse(@Param('courseId')courseId){
        const course = await this.cousrsesService.getCourse(courseId);
        return course;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.cousrsesService.addCourse(createCourseDto);
        return course;
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Delete()
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async deleteCourse(@Query() query) {
        const courses = await this.cousrsesService.deleteCourse(query.courseId);
        return courses;
    }
}
