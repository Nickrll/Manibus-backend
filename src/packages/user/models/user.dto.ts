import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Profile } from "src/packages/profile/models/profile.entity";

export class UserDto {
    @ApiProperty({ type: [Profile] })
    readonly profile: Profile;

    @ApiProperty()
    @IsString()
    readonly email: string;
}