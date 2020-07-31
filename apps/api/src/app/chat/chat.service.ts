import { Injectable } from '@nestjs/common';
import { Message } from '@test-chat/data';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Injectable()
export class ChatService extends InMemoryDBService<Message> {
  prePoulate(count: number) {
    const recordFactory = (idx: number): Partial<Message> => ({
      id: idx,
      user: {
        id: idx,
        name: `User${idx}`,
      },
      message: `Test${idx}`,
      date: Date.now(),
    });

    this.seed(recordFactory, count);
    return this.getAll();
  }
}
