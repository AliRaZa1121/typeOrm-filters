import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength
} from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  last_name: string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(15)
  password: string;

  @ApiProperty({ default: "test@mailinator.com" })
  @IsEmail()
  email: string;
}
