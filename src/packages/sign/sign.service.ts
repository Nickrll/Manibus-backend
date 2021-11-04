import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignDto } from './models/sign.dto';
import { Sign } from './models/sign.entity';

@Injectable()
export class SignService {
  constructor(
    @InjectRepository(Sign)
    private readonly signRepository: Repository<Sign>
  ) {}

  findAll(): Promise<Sign[]> {
    return this.signRepository.find();
  }

  findOneByName(name: string): Promise<Sign> {
    return this.signRepository.createQueryBuilder('category')
    .where('category.name = :name', {
      name: name
    })
    .getOne();
  }

  findOne(id: string): Promise<Sign> {
    return this.signRepository.findOne(id);
  }

  async save(signDto: SignDto): Promise<Sign> {
    return await this.signRepository.save(signDto);
  }

  async create(signDto: SignDto): Promise<Sign> {
    return await this.signRepository.save(signDto);
  }

  async remove(id: string) {
    await this.signRepository.delete(id);
  }
}
