import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigService],
  providers: [ConfigService],
})
export class DatabaseModule {}
