import { Body, Controller, Get, Post, Req, Res, UseGuards, Request, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './strategies/magic-login.strategy';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger()

  constructor(
    private authService: AuthService,
    private magicLoginStrategy: MagicLoginStrategy
  ) { }

  @Post('/strategy')
  getAuthStrategy(@Body() body: { email: string }) {
    return `strategy ${body.email}`;
  }


  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req) {
    return this.authService.generateTokens(req.user)
  }


  @UseGuards(LocalAuthGuard)
  @Post('/logout')
  async logout(@Req() req) {

  }

  @UseGuards(AuthGuard('magiclogin'))
  @Get('/login/callback')
  callback(@Req() req) {
    console.log(req)
    const token = this.authService.generateTokens(req.user)
    return this.authService.showTokenInfo(token.access_token)
  }

  @Post('send-magic-link')
  sendMagicLink(
    @Req() req,
    @Res() res,
    @Body() body: { destination: string }) {
    this.authService.validateUser(body.destination)
    return this.magicLoginStrategy.send(req, res)
  }
}
