import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
  providers: [AppConfigService],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
