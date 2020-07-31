/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppLogger } from './app/app.logger';
import { AppModule } from './app/app.module';

// https://github.com/artonio/nestjs-session-tutorial-finished/
// import * as session from 'express-session';
// import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  const globalPrefix = 'api';
  const logger = new AppLogger();
  app.useLogger(logger);
  app.setGlobalPrefix(globalPrefix);
  app.useWebSocketAdapter(new WsAdapter(app));
  // app.useGlobalGuards(new ChatAuthGuard(app.get(AppLogger)));
  const microservice = app.connectMicroservice({
    transport: Transport.TCP,
  });
  await app.startAllMicroservicesAsync();
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
