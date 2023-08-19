import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { VideoService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoService: VideoService) {}

  @Post('fetch')
  async fetchVideos(@Query('searchTerm') searchTerm?: string) {
    return await this.videoService.fetchLatestVideos(searchTerm);
  }
}
