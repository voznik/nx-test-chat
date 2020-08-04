import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppLogger } from '../app.logger';

@Injectable()
export class ChatAuthGuard implements CanActivate {
  constructor(private logger: AppLogger) {
    this.logger.setContext('ChatAuthGuard');
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToWs();
    const client = ctx.getClient();
    const handler = context.getHandler().name;
    this.logger.log('canActivate');
    return true;
  }
}
