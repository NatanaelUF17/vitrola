import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongRequest } from 'src/models/songRequest';
import { Repository } from 'typeorm';

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
    try {
      await this.songRequestRepository.insert(songRequest);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
