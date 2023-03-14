import { ApiProperty, PartialType } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEmail,
  IsEnum,
  ValidateNested,
  IsOptional,
  MaxLength,
  IsNotEmpty,
  isDate,
  IsDateString,
  isEnum,
} from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @MaxLength(255)
  first_name: string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(255)
  last_name: string;

  @ApiProperty({ default: "test@mailinator.com" })
  @IsEmail()
  email: string;
}
