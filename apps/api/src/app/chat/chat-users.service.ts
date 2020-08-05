import { Injectable } from '@nestjs/common';
import { User } from '@test-chat/data';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Injectable()
export class ChatUsersService extends InMemoryDBService<User> {
  private count = 0;

  prePoulate(count: number): User[] {
    this.count = count;
    const recordFactory = (idx: number): Partial<User> => ({
      id: idx,
      name: `User${idx}`,
    });

    this.seed(recordFactory, count);
    return this.getAll();
  }

  addUser(userName: string): User {
    const existing = this.findByName(userName);
    if (existing) {
      return;
    }
    const user: User = { id: ++this.count, name: userName };
    return this.create(user);
  }

  removeUser(userName: string): void {
    const existing = this.findByName(userName);
    return this.delete(existing.id);
  }

  findByName(userName: string) {
    return this.query((record) => record.name === userName)[0] || null;
  }
}
