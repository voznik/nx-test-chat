import { Injectable, Scope, Logger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class AppLogger extends Logger {}

import { Module } from '@nestjs/common';

@Module({
  providers: [AppLogger],
  exports: [AppLogger],
})
export class LoggerModule {}
