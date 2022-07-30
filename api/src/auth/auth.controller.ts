import { Controller, Get, Post, RawBodyRequest, Request } from '@nestjs/common';
import { Users } from 'src/schemas/user.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class CatsController {
  constructor(private authService: AuthService) {}

  @Get()
  async getCats(): Promise<Users[]> {
    return this.authService.findAll();
  }

  @Post('login')
  async loginin(@Request() req) {
    return this.authService.login(req.body);
  }

  @Post('register')
  async create(@Request() req) {
    const raw = req.body
    return this.authService.create(raw);
  }
}