import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/config.service';
import { LoginUserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { comparePassword } from 'src/utils/hash-password';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private appConfigService: AppConfigService,
    private userMainService: UserService,
  ) {}

  async validateUser(data: LoginUserDto): Promise<any> {
    let userRow = await this.userMainService.findOneByEmail(data.email);
    if (!userRow) {
      return null;
    }
    let isPasswordMatch = await comparePassword(
      data.password,
      userRow.password,
    );
    if (!isPasswordMatch) {
      return null;
    }
    return userRow;
  }

  generateJWT(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async logoutUser(user: User) {}
}
