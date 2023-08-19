import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config/config.service';
import { UserModule } from './user/user.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [ConfigModule, UserModule, VideosModule],
  controllers: [AppController],
  providers: [ConfigService, AppService, AppConfigService],
})
export class AppModule {}
