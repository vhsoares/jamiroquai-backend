import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategies/magic-login.strategy';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy
  ) { }

  @Post('/strategy')
  getAuthStrategy(@Body() body: { email: string }) {
    return `strategy ${body.email}`;
  }

  @UseGuards(AuthGuard('magiclogin'))
  @Get('/login/callback')
  callback(@Req() req) {
    console.log(req)
    const token =  this.authService.generateTokens(req.user)
    return this.authService.showTokenInfo(token.access_token)
  }

  @Post('send-magic-link')
  sendMagicLink(
    @Req() req,
    @Res() res,
    @Body() body: { destination: string }) {

    this.authService.validateUser(body.destination)
    return this.strategy.send(req, res)
  }
}
