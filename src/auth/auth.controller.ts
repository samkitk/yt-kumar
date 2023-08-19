import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    let isUserValid = await this.authService.validateUser(body);

    if (isUserValid) {
      return this.authService.generateJWT(isUserValid);
    }
    return {
      message: 'Invalid credentials',
    };
  }
}
