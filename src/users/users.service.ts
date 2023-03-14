import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListingParams } from "src/dto/global.dto";
import { FilterUserDto } from "./dto/filter-user.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository
  ) {}

  async getUsers(listingParams: ListingParams, filterUserDto: FilterUserDto) {
    return await this.usersRepository.getUsers(listingParams, filterUserDto);
  }
}
