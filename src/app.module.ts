import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule, SignModule, CategoryModule, ProfileModule, StatisticModule, UserModule } from './packages'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, 
    ProfileModule, 
    CategoryModule, 
    LessonModule, 
    SignModule,
    StatisticModule
  ]
})
export class AppModule {}
