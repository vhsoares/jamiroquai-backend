import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Settings {
  @Prop()
  whatsapp_number: string;

  @Prop({ default: false })
  whatsapp_allow_contact: boolean;

  @Prop()
  message_number: string;

  @Prop({ default: false })
  message_allow_contact: boolean;

  @Prop({ default: false })
  email_allow_contact: boolean;
}
