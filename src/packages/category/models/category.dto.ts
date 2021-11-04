import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CategoryDto {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;
}