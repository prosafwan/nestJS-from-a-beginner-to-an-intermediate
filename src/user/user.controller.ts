import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  //   getUsers() {
  //     return this.userService.getUsers();
  //   }
  getUsers(
    @Query('age') age?: string,
    @Query('phone') phone?: string,
    @Query('email') email?: string,
  ) {
    if (age || phone || email) {
      return this.userService.getUsersByFilter({
        age: age ? Number(age) : undefined,
        phone,
        email,
      });
    }
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}
