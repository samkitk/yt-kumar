import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { AppConfigService } from './config/config.service';
import { UserModule } from './user/user.module';
import { VideosModule } from './videos/videos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule, UserModule, VideosModule, DatabaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
