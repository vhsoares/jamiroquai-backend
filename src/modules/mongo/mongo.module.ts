import { mongoProviders } from './mongo.providers';
import { Module } from '@nestjs/common';

@Module({
  providers: [...mongoProviders],
  exports: [...mongoProviders],
})
export class MongoModule {}
