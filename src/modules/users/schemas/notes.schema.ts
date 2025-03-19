import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Notes {
  @Prop()
  title: string;

  @Prop()
  description: string;
}
