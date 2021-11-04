import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { UserDto } from './models/user.dto';
import { User } from './models/user.entity';
import { UserService } from './user.service';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiParam({name: 'id', required: true})
  getOne(@Param() params): Promise<User> {
    return this.userService.findOne(params.id);
  }

  @Put()
  update(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.save(createUserDto)
  }

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto)
  }

  @Delete(':id')
  @ApiParam({name: 'id', required: true})
  delete(@Param() params): string {
    try{
      this.userService.remove(params.id)
    } catch (Exception) {
      return Exception
    }
  }
}