import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatisticDto } from './models/statistic.dto';
import { Statistic } from './models/statistic.entity';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepository: Repository<Statistic>
  ) {}
  
  findAll(): Promise<Statistic[]> {
    return this.statisticRepository.find();
  }
  findAllById(category: string): Promise<Statistic[]> {
    throw new Error('Method not implemented.'); 
  }

  findOne(id: string): Promise<Statistic> {
    return this.statisticRepository.findOne(id);
  }

  async save(statisticDto: StatisticDto): Promise<Statistic> {
    return await this.statisticRepository.save(statisticDto);
  }

  async create(statisticDto: StatisticDto): Promise<Statistic> {
    return await this.statisticRepository.save(statisticDto);
  }
  
  async remove(id: string) {
    await this.statisticRepository.delete(id);
  }

}
