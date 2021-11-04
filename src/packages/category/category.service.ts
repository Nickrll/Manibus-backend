import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from './models/category.dto';
import { Category } from './models/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CategoryDto): Promise<Category> {
    return await this.categoryRepository.save(createCategoryDto);
  }

  async save(createCategoryDto: CategoryDto): Promise<Category> {
    return await this.categoryRepository.save(createCategoryDto);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOneByName(name: string): Promise<Category> {
    return this.categoryRepository.createQueryBuilder('category')
    .where('category.name = :name', {
      name: name
    })
    .getOne();
  }

  async remove(id: string ): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
