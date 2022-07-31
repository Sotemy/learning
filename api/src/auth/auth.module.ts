import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, usersSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: usersSchema }])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
