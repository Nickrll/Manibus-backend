import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { SignDto } from './models/sign.dto';
import { Sign } from './models/sign.entity';
import { SignService } from './sign.service';
@ApiTags('sign')
@Controller('sign')
export class SignController {
  constructor(
    private readonly signService: SignService
  ) {}

  @Get()
  getAll(): Promise<Sign[]> {
    return this.signService.findAll();
  }

  @Get(':name')
  @ApiParam({name: 'name', required: true})
  getByName(@Param() params): Promise<Sign> {
    return this.signService.findOneByName(params.name);
  }

  @Get(':id')
  @ApiParam({name: 'id', required: true})
  getById(@Param() params): Promise<Sign> {
    return this.signService.findOne(params.id);
  }

  @Put()
  update(@Body() signDto: SignDto): Promise<Sign> {
    return this.signService.save(signDto)
  }

  @Post()
  async create(@Body() signDto: SignDto): Promise<Sign> {
    return this.signService.create(signDto)
  }

  @Delete(':id')
  @ApiParam({name: 'id', required: true})
  delete(@Param() params): string {
    try{
      this.signService.remove(params.id)
    } catch (Exception) {
      return Exception
    }
  }
}