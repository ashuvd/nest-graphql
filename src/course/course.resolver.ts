import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { Inject } from '@nestjs/common';
import Course from '../models/Course';

@Resolver(of => Course)
export class CourseResolver {
  constructor(@Inject('COURSE_REPOSITORY') private readonly courseRepository: typeof Course) {
  }
  @Query(returns => [Course])
  courses(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }
  @Query(returns => Course)
  course(@Args('id') id: string): Promise<Course> {
    return this.courseRepository.findByPk(id);
  }
  @Mutation(returns => Course)
  async deleteCourseById(@Args('id') id: string): Promise<Course> {
    const course = await this.courseRepository.findByPk(id);
    if (!course) {
      return course;
    }
    course.destroy();
    return course;
  }
  @Mutation(returns => Course)
  async createCourse(@Args('name') name: string, @Args('price') price: number, @Args('description') description?: string): Promise<Course> {
    return this.courseRepository.create({name, description, price});
  }
}
