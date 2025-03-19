import mongoose from 'mongoose';
import mongoConfig from 'src/config/mongo.config';

export const mongoProviders = [
  {
    provide: 'MONGO_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(mongoConfig().mongo_connection_string),
  },
];
