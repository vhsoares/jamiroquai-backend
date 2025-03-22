import { Injectable, UnauthorizedException } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';
import EmailLoginRecorrente from 'emails/login-recorrente';
import { render } from '@react-email/components';
import { UsersService } from '../users/users.service';
import { User } from '../users/schemas/users.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private notificationService: NotificationService,
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }


    validateUser = async (email: string) => {
        const user = await this.usersService.getByEmail(email)

        if (!user || user.authSettings.auth_type != 'EMAIL') {
            throw new UnauthorizedException()
        }

        return user
    }

    generateTokens(user: User) {
        const payload = { sub: user, email: user.email }

        return { access_token: this.jwtService.sign(payload) };
    }

    showTokenInfo(token: string) {
        return this.jwtService.decode(token)
    }

    notify = async (destination: string, link: string) => {
        const emailHtml = await render(EmailLoginRecorrente({ name: destination, link }))
        return this.notificationService.notifyMail(
            {
                destination: 'vsbbbeico@gmail.com',
                subject: 'notification',
                text: 'text',
                html: emailHtml
            });
    }

}
