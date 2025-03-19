import { Connection } from 'mongoose';
import { UserSchema } from './schemas/users.schema';

export const UsersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['MONGO_CONNECTION'],
  },
];
