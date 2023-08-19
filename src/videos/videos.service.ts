import { Injectable } from '@nestjs/common';
import { YoutubeService } from './provider/youtube/youtube.service';

@Injectable()
export class VideoService {
  constructor(private readonly youtubeService: YoutubeService) {}
  async fetchLatestVideos(searchTerm?: string) {
    return await this.youtubeService.fetchLatestVideos(searchTerm);
  }
}
