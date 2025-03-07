import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'CreateUser')
  createUser(payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }

  @GrpcMethod('UserService', 'GetUserById')
  getUser({ id }) {
    return this.userService.getUser(id);
  }

  @GrpcMethod('UserService', 'GetAllUsers')
  async getAllUsers() {
    return { users: await this.userService.getAllUsers() };
  }
}
