import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileDto } from './models/profile.dto';
import { Profile } from './models/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>
  ) {}

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(id: string): Promise<Profile> {
    return this.profileRepository.findOne(id);
  }
  
  async save(profileDto: ProfileDto): Promise<Profile> {
    return await this.profileRepository.save(profileDto);
  }
}
