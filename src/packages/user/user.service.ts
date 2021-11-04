import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './models/user.dto';
import { User } from './models/user.entity'
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(createUserDto: UserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async save(createUserDto: UserDto): Promise<User> {
    return await this.userRepository.save(createUserDto);
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }
}
