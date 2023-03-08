import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SongController } from './controllers/song.controller';
import { SongRequestController } from './controllers/song-request.controller';
import { SongService } from './services/song.service';
import { SongRequestService } from './services/song-request.service';
import dbConfig from './database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './models/song';
import { SongRequest } from './models/songRequest';

@Module({
  imports: [dbConfig, TypeOrmModule.forFeature([Song, SongRequest])],
  controllers: [AppController, SongController, SongRequestController],
  providers: [SongService, SongRequestService],
})
export class AppModule {}
