import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Post()
  insert(@Body() user) {
    return this.userService.create(user);
  }

  @Get('/:email')
  getByEmail(@Param('email') email: string) {
    return this.userService.getByEmail(email)
  }

  @Get()
  findAll() {
    return 'Olá meus quirido';
  }
}
