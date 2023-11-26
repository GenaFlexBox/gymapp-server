import { Controller, Get, Redirect, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuards } from './guards/Guards';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuards)
  async handlerLogin() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuards)
  @Redirect()
  async handlerRedirect(@Res() res) {
    return res.redirect('http://192.168.1.206:19006/');
  }

  @Get('status')
  async status(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'User logged', user: request.user};
    } else {
      return { msg: 'User no authentication' };
    }
  }
}
