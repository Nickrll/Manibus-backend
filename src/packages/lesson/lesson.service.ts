import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonDto } from './models/lesson.dto';
import { Lesson } from "./models/lesson.entity";
@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>
  ) {}
  
  findAll(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
  findOneById(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne(id);
  }
  findAllByCategory(lesson: string): Promise<Lesson[]> {
    return this.lessonRepository.createQueryBuilder('category')
    .where('lesson.categoryName = :category', {
      category: lesson
    })
    .getMany();
  }
  async remove(id: any) {
    await this.lessonRepository.delete(id);
  }
  async create(createLessonDto: LessonDto): Promise<Lesson> {
    return await this.lessonRepository.save(createLessonDto);
  }
  async save(createLessonDto: LessonDto): Promise<Lesson> {
    return await this.lessonRepository.save(createLessonDto);
  }
}
