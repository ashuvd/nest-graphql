import { Module } from '@nestjs/common'
import { CourseResolver } from './course.resolver'
import { courseProviders } from './course.providers';

@Module({
  providers: [CourseResolver, ...courseProviders],
})
export class CourseModule {}
