import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ProfileDto } from './models/profile.dto';
import { Profile } from './models/profile.entity';
import { ProfileService } from './profile.service';
@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) {}

  @Get()
  getAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiParam({name: 'id', required: true})
  getOne(@Param() params): Promise<Profile> {
    return this.profileService.findOne(params.id);
  }

  @Put()
  update(@Body() profileDto: ProfileDto): Promise<Profile> {
    return this.profileService.save(profileDto)
  }
}