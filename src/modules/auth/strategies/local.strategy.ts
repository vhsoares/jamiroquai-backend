import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { AuthSettings } from "src/modules/users/schemas/auth-settings.schema";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email'
        })
    }

    async validate(username: string, password: string) {
        const user = await this.authService.validateLogin(username, password);

        if (!user) {
            throw new UnauthorizedException()
        }
        const { authSettings, ...result } = user
        return result
    }
}