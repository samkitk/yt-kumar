import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  password: string;
}

export class LoginUserDto {
  @IsEmail()
  email: string;
  password: string;
}
