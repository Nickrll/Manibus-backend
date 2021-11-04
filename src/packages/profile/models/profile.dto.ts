import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsArray, IsOptional } from "class-validator";
import { Statistic } from "src/packages/statistic/models/statistic.entity";

export class ProfileDto {
    @ApiProperty()
    @IsString()
    readonly first_name: string;

    @ApiProperty()
    @IsString()
    readonly last_name: string;

    @IsOptional()
    @IsArray()
    @ApiProperty({ type: [Statistic] })
    readonly statistics: Statistic[];
}