import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { NavigationModule } from './navigation/navigation.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { SettingModule } from './setting/setting.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    NavigationModule,
    UserModule,
    CourseModule,
    SettingModule,
    AuthModule,
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true, // For subscriptions
      // autoSchemaFile: 'schema.gql', // For code first
      typePaths: ['./src/**/*.graphql'], // For schema first
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        // outputAs: 'class',
      },
      // schemaDirectives: {
      //   upper: UpperCaseDirective,
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
