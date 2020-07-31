import { Module } from '@nestjs/common';
import { SessionModule } from 'nestjs-session';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { AppLogger, LoggerModule } from './app.logger';

@Module({
  imports: [
    SessionModule.forRoot({
      session: { secret: 'qwerty' },
    }),
    InMemoryDBModule.forRoot(),
    LoggerModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
