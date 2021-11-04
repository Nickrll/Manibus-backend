import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sign } from './models/sign.entity';
import { SignController } from './sign.controller';
import { SignService } from './sign.service';

@Module({
  controllers: [SignController],
  providers: [SignService],
  imports: [TypeOrmModule.forFeature([Sign])],
})
export class SignModule {};