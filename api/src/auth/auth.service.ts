import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt"

import { UserDocument, Users } from '../schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>) { }

  async create(user: Users): Promise<Object> {

    const full_data = user.username && user.password && user.email

    if (full_data) {


      if (await this.userModel.findOne({ email: user.email })) {
        throw new HttpException('Choose another username or email1', HttpStatus.FORBIDDEN);
      }

      if (await this.userModel.findOne({ username: user.username })) {
        throw new HttpException('Choose another username or email2', HttpStatus.FORBIDDEN);
      }

      console.log(user.password)
      const hash = await bcrypt.hash(user.password, 10);
      if (!hash){
        throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
      }

      user.password = hash
      const res = new this.userModel(user)
      res.save();
      return {username: res.username, email: res.email}

    }

    throw new HttpException('Please fill all fields', HttpStatus.FORBIDDEN);

  }

  async findAll(): Promise<Users[]> {

    return this.userModel.find().exec();

  }

  async login(user: Users): Promise<{}> {
    const res = await this.userModel.findOne({ email:user.email, username: user.username })
    console.log(res)
    if (!res) {
      throw new HttpException('Not found', HttpStatus.FORBIDDEN);
    }
    return {username: res.username, email: res.email}
  }
}
