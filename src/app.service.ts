import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfigService: AppConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
