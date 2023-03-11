import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongRequest } from 'src/models/songRequest';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongRequestService {
  constructor(
    @InjectRepository(SongRequest)
    private songRequestRepository: Repository<SongRequest>,
  ) {}

  async getAllSongRequest(): Promise<SongRequest[]> {
    return await this.songRequestRepository.find();
  }

  async getSongRequest(id: string): Promise<SongRequest> {
    return await this.songRequestRepository.findOneBy({ id });
  }

  async insertSongRequest(songRequest: SongRequest): Promise<void> {
    const newSongRequest: SongRequest = {
      songRequestId: uuidv4(),
      songId: songRequest.songId,
      isForAddingNewSong: songRequest.isForAddingNewSong,
      isForPlayingSong: songRequest.isForPlayingSong,
      songRequestDate: songRequest.songRequestDate,
      songName: songRequest.songName,
      songArtist: songRequest.songArtist,
    };

    try {
      await this.songRequestRepository.insert(newSongRequest);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
