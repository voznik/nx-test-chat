import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Session() session: { views?: number }) {
    session.views = (session.views || 0) + 1;
    return {
      session,
      message: this.appService.root(),
    };
  }
}
