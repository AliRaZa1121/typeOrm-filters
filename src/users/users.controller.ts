import { Controller, Get, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ListingParams } from "../dto/global.dto";
import { FilterUserDto } from "./dto/filter-user.dto";
import { UsersService } from "./users.service";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUserList(
    @Query() listingParams: ListingParams,
    @Query() filterUserDto: FilterUserDto
  ) {
    return this.userService.getUsers(listingParams, filterUserDto);
  }
}
