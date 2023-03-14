import { InternalServerErrorException } from "@nestjs/common";
import { ListingParams } from "src/dto/global.dto";
import { FilterUserDto } from "src/users/dto/filter-user.dto";
import { EntityRepository, Like, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  constructor() {
    super();
  }

  async getUsers(listingParams: ListingParams, filterUserDto: FilterUserDto) {
    try {
      let { page = 1, take = 10 } = listingParams;
      const skip = (page - 1) * take;
      let [data, total] = await this.findAndCount({
        where: {
          ...(filterUserDto.first_name && {
            first_name: Like(`%${filterUserDto.first_name}%`),
          }),
          ...(filterUserDto.last_name && {
            last_name: Like(`%${filterUserDto.last_name}%`),
          }),
          ...(filterUserDto.email && {
            email: Like(`%${filterUserDto.email}%`),
          }),
          ...(filterUserDto.status && {
            status: filterUserDto.status,
          }),
        },
        order: {
          id: "DESC",
        },
        take: take,
        skip: skip,
      });

      return { data, take, total, page };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
