import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, Users } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private userModel: Model<UserDocument>) {}

    async create(user: Users): Promise<Object> {
      if (Object.keys(user).length <= 0 && user.email === undefined && user.username === undefined) {
        return {message: 'error'}
      }
      const res = new this.userModel(user)
      res.save();
      return res
    }
  
    async findAll(): Promise<Users[]> {
      return this.userModel.find().exec();
    }

    login(user: Users): {} {
      const found = this.userModel.findOne({user})
      return found
    }
}
