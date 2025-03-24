import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from '../auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import mailConfig from 'src/config/mail.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        service: mailConfig().service,
        host: mailConfig().host,
        port: Number(mailConfig().port),
        secure: false, // upgrade later with STARTTLS
        ignoreTLS: true,
        logger: true,
        auth: {
          user: mailConfig().user,
          pass: mailConfig().pass,
        },
      }

    }),
    UsersModule,
    AuthModule,
    LoggerModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
