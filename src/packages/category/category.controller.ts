import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryDto } from './models/category.dto';
import { Category } from './models/category.entity';
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService
  ) {}

  @Get()
  getAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':name')
  @ApiParam({name: 'name', required: true})
  getByName(@Param() params): Promise<Category> {
    return this.categoryService.findOneByName(params.name);
  }

  @Put()
  update(@Body() createCategoryDto: CategoryDto): Promise<Category> {
    return this.categoryService.save(createCategoryDto)
  }

  @Post()
  async create(@Body() createCategoryDto: CategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto)
  }

  @Delete(':id')
  @ApiParam({name: 'id', required: true})
  delete(@Param() params): string {
    try{
      this.categoryService.remove(params.id)
    } catch (Exception) {
      return Exception
    }
  }
}