import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { YoutubeService } from './provider/youtube/youtube.service';
import { VideoService } from './videos.service';

@Module({
  providers: [VideoService, YoutubeService],
  controllers: [VideosController],
})
export class VideosModule {}
