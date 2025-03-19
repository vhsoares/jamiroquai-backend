import { Inject, Injectable } from '@nestjs/common';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private UsersModel: Model<User>) {}

  async create(content) {
    const user = await new this.UsersModel(content);
    return user.save();
  }

  async getByEmail(email: string) {
    const user = await this.UsersModel.findOne({ email });
    return user;
  }

  async findAll() {}
}
