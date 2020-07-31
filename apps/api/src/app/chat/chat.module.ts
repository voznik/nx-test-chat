import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module, Logger } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ChatUsersController } from './chat-users.controller';
import { ChatUsersService } from './chat-users.service';
import { ChatGateway } from './chat.gateway';
import { ChatAuthGuard } from './chat.guard';
import { ChatService } from './chat.service';
import { LoggerModule } from '../app.logger';

@Module({
  imports: [InMemoryDBModule.forFeature('chat'), LoggerModule],
  controllers: [/* ChatMessagesController */ ChatUsersController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ChatAuthGuard,
    },
    // { provide: Logger, useExisting: AppLogger, },
    ChatGateway,
    ChatService,
    ChatUsersService,
  ],
})
export class ChatModule {}
