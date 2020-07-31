import { Controller, Get, Param } from '@nestjs/common';
import { InMemoryDBEntityAsyncController } from '@nestjs-addons/in-memory-db';
import { Message } from '@test-chat/data';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatMessagesController extends InMemoryDBEntityAsyncController<
  Message
> {
  constructor(private chatService: ChatService) {
    super(chatService);
  }

  @Get('messages')
  GetMessages() {
    return this.chatService.getAll();
  }

  @Get('seed')
  SeedMessage() {
    return this.chatService.prePoulate(10);
  }

  @Get(':id')
  GetMessageByID(@Param('id') id: number) {
    return this.chatService.get(+id);
  }
}
