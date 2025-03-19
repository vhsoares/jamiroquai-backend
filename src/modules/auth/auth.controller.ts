import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('/strategy')
  getAuthStrategy(@Body() body: {email: string}) {
    return `strategy ${body.email}`;
  }

}
