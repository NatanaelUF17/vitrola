import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SongRequest {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  songRequestId: string;
  @Column({ nullable: true })
  songId?: string | null;
  @Column()
  songRequestDate: Date;
  @Column()
  isForAddingNewSong: boolean;
  @Column()
  isForPlayingSong: boolean;
  @Column({ nullable: true })
  songName?: string | null;
  @Column({ nullable: true })
  songArtist?: string | null;
}
