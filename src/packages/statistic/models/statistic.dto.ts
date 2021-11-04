import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsArray, IsOptional } from "class-validator";
import { Lesson } from "src/packages/lesson/models/lesson.entity";

export class StatisticDto {
    @ApiProperty()
    @IsInt()
    readonly score: number;

    @ApiProperty()
    @IsInt()
    readonly amt_finished: number;

    @IsOptional()
    @ApiProperty({ type: [Lesson] })
    @IsArray()
    sign: Lesson;
}