import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Notes } from './notes.schema';
import { Settings } from './settings.schema';
import { AuthLog } from './auth-log.schema';
import { AuthSettings } from './auth-settings.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  declare name: string;

  @Prop({ unique: true })
  declare email: string;

  @Prop()
  declare profile_picture: string;

  @Prop([Notes])
  declare notes: Notes[];

  @Prop([AuthLog])
  declare auth_logs: AuthLog[];

  @Prop(Settings)
  declare settings: Settings;

  @Prop(AuthSettings)
  declare authSettings: AuthSettings;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocumentOverride = {
  notes: Types.DocumentArray<Notes>;
  settings: Types.Subdocument<Settings>;
  auth_settings: Types.Subdocument<AuthSettings>;
  auth_logs: Types.DocumentArray<AuthLog>;
};

export type PersonDocument = HydratedDocument<User, UserDocumentOverride>;
