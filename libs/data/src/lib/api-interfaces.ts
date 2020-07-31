import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Message {
  id: number;
  user: User;
  message: string;
  date: number | Date;
}

export class User {
  id: number;
  name: string;
}

export interface ExampleEntity extends InMemoryDBEntity {
  message: string;
}
