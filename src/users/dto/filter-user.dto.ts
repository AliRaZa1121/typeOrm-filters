import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class FilterUserDto {
  @ApiProperty({
    required: false,
    description: "User filter by status",
    enum: ["1", "0"],
  })
  @IsOptional()
  status?: string;

  @ApiProperty({ required: false, description: "User filter by first_name" })
  @IsOptional()
  first_name?: string;

  @ApiProperty({ required: false, description: "User filter by email" })
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false, description: "User filter by last_name" })
  @IsOptional()
  last_name?: string;
}
