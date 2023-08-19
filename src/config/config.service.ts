import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get youtubeApiKey(): string {
    return this.configService.get<string>('YOUTUBE_API_KEY');
  }

  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
}
