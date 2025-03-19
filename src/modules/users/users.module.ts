import { Module } from '@nestjs/common';
import { MongoModule } from '../mongo/mongo.module';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from './users.providers';

@Module({
  imports: [MongoModule],
  controllers: [UserController],
  providers: [UsersService, ...UsersProviders],
})
export class UsersModule {}
