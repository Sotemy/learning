import { Injectable } from '@nestjs/common';
import { Users } from 'src/schemas/user.interface';

@Injectable()
export class AuthService {
    private readonly users: Users[] = [];

    create(user: Users): {} {
      if (Object.keys(user).length <= 0 && user.email === undefined && user.username === undefined) {
        return {message: 'error'}
      }
      this.users.push(user);
      return user
    }
  
    findAll(): Users[] {
      return this.users;
    }

    login(user: Users): {} {
      const found = this.users.find(obj => obj.username === user.username)
      return found
    }
}
