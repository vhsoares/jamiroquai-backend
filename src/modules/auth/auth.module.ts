import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { NotificationModule } from '../notification/notification.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MagicLoginStrategy } from './strategies/magic-login.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Module({
  imports: [
    NotificationModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '5m'
      }
    }),],

  controllers: [AuthController],
  exports: [AuthService],
  providers: [
    AuthService,
    MagicLoginStrategy,
    LocalStrategy,
    JwtStrategy,
    LocalAuthGuard,
  ],
})
export class AuthModule { }
