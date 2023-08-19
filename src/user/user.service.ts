import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { hashPassword } from 'src/utils/hash-password';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    let userRow = User.create();
    userRow.email = createUserDto.email;
    userRow.password = await hashPassword(createUserDto.password);
    return await userRow.save();
  }

  async findOneById(id: User['id']) {
    return await User.findOneOrFail({ where: { id: id } });
  }

  async findOneByEmail(email: User['email']) {
    return await User.findOneOrFail({ where: { email: email } });
  }
}
