import { Injectable, Logger } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy as any) {
    private readonly logger = new Logger(MagicLoginStrategy.name);

    constructor(private authService: AuthService) {

        super({
            secret: 'nova-secret',
            jwtOptions: {
                expiresIn: '10m',
            },
            callbackUrl: 'http://localhost:3000/auth/login/callback',
            sendMagicLink: async (destination, href) => {
                this.authService.notify(destination, href)

            },
            verify: async (payload, callback) => {
                return callback(null, this.validate(payload))
            }
        });
    }

    validate(payload: { destination: string }) {
        const user = this.authService.validateUser(payload.destination)
        return user
    }
}