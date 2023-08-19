import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AppConfigService,
  DatabaseConfigService,
} from 'src/config/config.service';
import { entities } from './entities.index';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [DatabaseConfigService],
      useFactory: (databaseConfig: DatabaseConfigService) => ({
        type: 'postgres',
        host: databaseConfig.databaseHost,
        port: +databaseConfig.databasePort,
        username: databaseConfig.databaseUser,
        password: databaseConfig.databasePassword,
        database: databaseConfig.databaseName,
        synchronize: true,
        logging: 'all',
        entities: entities,
      }),
    }),
  ],
  providers: [AppConfigService, DatabaseConfigService],
})
export class DatabaseModule {}
