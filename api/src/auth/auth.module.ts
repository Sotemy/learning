import { Module } from '@nestjs/common';

import { CatsController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [AuthService],
})
export class AuthModule {}
