import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import mongoConfig from './config/mongo.config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  console.log(JSON.stringify(mongoConfig));

  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
