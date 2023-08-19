import { Injectable } from '@nestjs/common';
import { YouTubeConfigService } from 'src/config/config.service';
import { youtubeApiRoutes } from './youtube.routes';
import fetch from 'node-fetch';

@Injectable()
export class YoutubeService {
  constructor(private readonly youtubeConfigService: YouTubeConfigService) {}

  async buildQueryString(params: any) {
    let queryString = '?';
    for (let key in params) {
      queryString += key + '=' + params[key] + '&';
    }
    return queryString.slice(0, -1);
  }

  async fetchLatestVideos(searchTerm?: string) {
    let apiUrl = this.youtubeConfigService.youtubeApiUrl;
    let resource = youtubeApiRoutes.searchVideos;
    let rawApiEndpoint = apiUrl + resource;

    let params = {
      part: 'snippet',
      maxResults: 10,
      key: this.youtubeConfigService.youtubeApiKey,
      order: 'date',
      type: 'video',
    };

    if (searchTerm) {
      params['q'] = searchTerm;
    }
    let apiEndpoint = rawApiEndpoint + (await this.buildQueryString(params));

    let response = await fetch(apiEndpoint);
    let data = await response.json();
    return data;
  }
}
