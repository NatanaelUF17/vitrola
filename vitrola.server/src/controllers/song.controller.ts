import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Song } from 'src/models/song';
import { SongService } from 'src/services/song.service';

@Controller('/api/v1/song')
export class SongController {
  constructor(private songServices: SongService) {}

  @Get()
  async getAllSongs(): Promise<Song[]> {
    return await this.songServices.getAllSongs();
  }

  @Get(':id')
  async getSong(@Param('id') id: string) {
    return await this.songServices.getSong(id);
  }

  @Post()
  async insertSong(@Body() newSong: Song): Promise<void> {
    console.log(newSong);
    await this.songServices.insertSong(newSong);
  }

  @Put(':id')
  async updateSong(@Param('id') id: string, @Body() updatedSong: Song) {
    await this.songServices.updateSong(id, updatedSong);
  }
}
