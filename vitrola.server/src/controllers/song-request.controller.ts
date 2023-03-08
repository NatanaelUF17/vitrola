import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SongRequest } from 'src/models/songRequest';
import { SongRequestService } from 'src/services/song-request.service';

@Controller('api/v1/song-request')
export class SongRequestController {
  constructor(private songRequestService: SongRequestService) {}

  @Get()
  async getAllSongRequests(): Promise<SongRequest[]> {
    return await this.songRequestService.getAllSongRequest();
  }

  @Get(':id')
  async getSongRequest(@Param('id') id: string) {
    return await this.songRequestService.getSongRequest(id);
  }

  @Post()
  async insertSongRequest(@Body() newSongRequest: SongRequest): Promise<void> {
    await this.songRequestService.insertSongRequest(newSongRequest);
  }
}
