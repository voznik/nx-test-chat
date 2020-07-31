import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@test-chat/data';
import { ChatUsersService } from './chat-users.service';

@Controller('users')
export class ChatUsersController {
  constructor(private userService: ChatUsersService) {}

  @Get()
  GetUsers(): User[] {
    return this.userService.getAll();
  }

  @Get('seed')
  GetUser(): User[] {
    return this.userService.prePoulate(10);
  }

  @Get(':id')
  GetUserByID(@Param('id') id: number) {
    return this.userService.get(+id);
  }
}
