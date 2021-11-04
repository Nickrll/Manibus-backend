import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { LessonService } from './lesson.service';
import { LessonDto } from './models/lesson.dto';
import { Lesson } from './models/lesson.entity';
@ApiTags('lesson')
@Controller('lesson')
export class LessonController {
  constructor(
    private readonly lessonService: LessonService
  ) {}
  //Get all categories
  @Get()
  getAll(): Promise<Lesson[]> {
    return this.lessonService.findAll();
  }

  //Get category by name
  @Get(':category')
  @ApiParam({name: 'category', required: true})
  getAllByCategory(@Param() params): Promise<Lesson[]> {
    return this.lessonService.findAllByCategory(params.category);
  }

  @Get(':id')
  @ApiParam({name: 'category', required: true})
  getById(@Param() params): Promise<Lesson> {
    return this.lessonService.findOneById(params.category);
  }

  //Update category
  @Put()
  update(@Body() createLessonDto: LessonDto): Promise<Lesson> {
    return this.lessonService.save(createLessonDto)
  }

  //Create category
  @Post()
  async create(@Body() createLessonDto: LessonDto): Promise<Lesson> {
    return this.lessonService.create(createLessonDto)
  }

  //Delete Category
  @Delete(':id')
  @ApiParam({name: 'id', required: true})
  delete(@Param() params): string {
    try{
      this.lessonService.remove(params.id)
    } catch (Exception) {
      return Exception
    }
  }
}