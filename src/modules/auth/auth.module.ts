import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { NotificationModule } from '../notification/notification.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MagicLoginStrategy } from './strategies/magic-login.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    NotificationModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '2h'
      }
    }),],

  controllers: [AuthController],
  providers: [AuthService, MagicLoginStrategy, JwtStrategy],
})
export class AuthModule { }
