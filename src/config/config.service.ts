import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get jwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }
}

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get databaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  get databasePort(): number {
    return Number(this.configService.get<number>('DATABASE_PORT'));
  }

  get databaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  get databasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  get databaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }
}

@Injectable()
export class YouTubeConfigService {
  constructor(private configService: ConfigService) {}

  get youtubeApiKey(): string {
    return this.configService.get<string>('YOUTUBE_API_KEY');
  }

  get youtubeApiDomain(): string {
    return this.configService.get<string>('YOUTUBE_API_URL');
  }

  get youtubeApiVersion(): string {
    return this.configService.get<string>('YOUTUBE_API_VERSION');
  }

  get youtubeApiUrl(): string {
    return this.youtubeApiDomain + this.youtubeApiVersion;
  }
}
