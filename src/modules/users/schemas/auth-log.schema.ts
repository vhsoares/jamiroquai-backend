import { Prop, Schema } from '@nestjs/mongoose';
import { Date } from 'mongoose';

@Schema()
export class AuthLog {
  @Prop({ default: new Date(), type: Date })
  datetime: Date;

  @Prop()
  ip: string;

  @Prop()
  method: string;

  @Prop()
  mac_address: string;

  @Prop()
  workspace: string;
}
