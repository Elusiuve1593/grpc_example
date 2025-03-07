import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(payload: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(payload);
    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }

  async getUser(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
