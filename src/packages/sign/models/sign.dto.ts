import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsArray, IsOptional } from "class-validator";

export class SignDto {
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
    @IsString()
    readonly video: string;

    @ApiProperty()
    @IsInt()
    readonly difficulty: number;
}