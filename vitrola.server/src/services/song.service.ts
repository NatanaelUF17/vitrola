import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/models/song';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async getAllSongs(): Promise<Song[]> {
    return await this.songRepository.find();
  }

  async getSong(id: string): Promise<Song> {
    return await this.songRepository.findOneBy({ id });
  }

  async insertSong(song: Song): Promise<void> {
    const newSong: Song = {
      songId: uuidv4(),
      name: song.name,
      songUrl: song.songUrl,
      thumbnailUrl: song.thumbnailUrl,
    };

    try {
      await this.songRepository.insert(newSong);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateSong(id: string, song: Song): Promise<void> {
    let oldSong = {};

    if (id) {
      oldSong = await this.getSong(id);
    }

    try {
      const newSong = {
        ...oldSong,
        name: song.name,
      };

      await this.songRepository.save(newSong);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
