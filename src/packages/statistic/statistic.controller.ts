import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { StatisticDto } from './models/statistic.dto';
import { Statistic } from './models/statistic.entity';
import { StatisticService } from './statistic.service';
@ApiTags('statistic')
@Controller('statistic')
export class StatisticController {
  constructor(
    private readonly statisticService: StatisticService
  ) {}

  @Get()
  getAll(): Promise<Statistic[]> {
    return this.statisticService.findAll();
  }

  @Get(':id')
  @ApiParam({name: 'id', required: true})
  getAllById(@Param() params): Promise<Statistic[]> {
    return this.statisticService.findAllById(params.id);
  }

  @Get(':id')
  @ApiParam({name: 'id', required: true})
  getById(@Param() params): Promise<Statistic> {
    return this.statisticService.findOne(params.id);
  }

  @Put()
  update(@Body() statisticDto: StatisticDto): Promise<Statistic> {
    return this.statisticService.save(statisticDto)
  }

  @Post()
  async create(@Body() statisticDto: StatisticDto): Promise<Statistic> {
    return this.statisticService.create(statisticDto)
  }

  @Delete(':id')
  @ApiParam({name: 'id', required: true})
  delete(@Param() params): string {
    try{
      this.statisticService.remove(params.id)
    } catch (Exception) {
      return Exception
    }
  }
}