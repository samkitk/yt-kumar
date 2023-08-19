import { Injectable } from '@nestjs/common';
import { YoutubeService } from './provider/youtube/youtube.service';
import { User } from 'src/user/entities/user.entity';
import { Video } from './entities/video.entity';
import { WatchLater } from './entities/watch-later.entity';

@Injectable()
export class VideoService {
  constructor(private readonly youtubeService: YoutubeService) {}
  async fetchLatestVideos(searchTerm?: string) {
    return await this.youtubeService.fetchLatestVideos(searchTerm);
  }

  async addVideoToWatchList(videoId: Video['id'], user: User) {
    const watchLaterRow: WatchLater = WatchLater.create();
    watchLaterRow.user = user;
    try {
      watchLaterRow.video = await Video.findOneOrFail({
        where: { id: videoId },
      });
    } catch (e) {
      throw new Error('Video not found');
    }
    await watchLaterRow.save();
  }

  async removeVideoFromWatchList(videoId: Video['id'], user: User) {
    try {
      const watchLaterRow = await WatchLater.delete({
        user: { id: user.id },
        video: { id: videoId },
      });
      return watchLaterRow;
    } catch (e) {
      throw new Error('Video not in Watchlist');
    }
  }
}
