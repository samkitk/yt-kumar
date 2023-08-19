import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import { AppConfigService, YouTubeConfigService } from './config.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [ConfigService, AppConfigService, YouTubeConfigService],
  exports: [ConfigService, AppConfigService, YouTubeConfigService],
})
export class ConfigModule {}
