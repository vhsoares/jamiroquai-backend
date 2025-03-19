import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class AuthSettings {
  @Prop()
  password: string;

  @Prop({ default: 'EMAIL' })
  auth_type: 'EMAIL' | 'PASSWORD' | 'GOOGLE';
}
