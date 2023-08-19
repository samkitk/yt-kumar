import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppConfigService } from 'src/config/config.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (configService: AppConfigService) => ({
        secret: configService.jwtSecret,
        signOptions: { expiresIn: '6h' },
      }),
      inject: [AppConfigService],
    }),
  ],
  providers: [AppConfigService, UserService],
})
export class AuthModule {}
