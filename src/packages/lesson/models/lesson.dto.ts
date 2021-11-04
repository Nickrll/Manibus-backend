import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsArray, IsOptional } from "class-validator";
import { Sign } from "src/packages/sign/models/sign.entity";


export class LessonDto {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsString()
    readonly image: string;

    @ApiProperty()
    @IsInt()
    readonly qst_amount: number;

    @ApiProperty()
    @IsInt()
    readonly difficulty: number;

    @IsOptional()
    @ApiProperty({ type: [Sign] })
    @IsArray()
    signs: Sign[];
}