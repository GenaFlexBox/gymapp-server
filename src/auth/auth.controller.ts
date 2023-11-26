import { Controller, Get, Req, UseGuards } from '@nestjs/common';
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
  async handlerRedirect() {
    return { msg: 'OK' };
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
