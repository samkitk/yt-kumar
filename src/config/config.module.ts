import { Global, Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService,
} from '@nestjs/config';
import {
  AppConfigService,
  DatabaseConfigService,
  YouTubeConfigService,
} from './config.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [
    ConfigService,
    AppConfigService,
    YouTubeConfigService,
    DatabaseConfigService,
  ],
  exports: [
    ConfigService,
    AppConfigService,
    YouTubeConfigService,
    DatabaseConfigService,
  ],
})
export class ConfigModule {}
