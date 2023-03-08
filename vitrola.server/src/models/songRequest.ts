import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SongRequest {
  @PrimaryGeneratedColumn()
  id?: string;
  @Column()
  songRequestId: string;
  @Column()
  songId: string;
  @Column()
  songRequestDate: Date;
  @Column()
  isForAddingNewSong: boolean;
  @Column()
  isForPlayingSong: boolean;
}
