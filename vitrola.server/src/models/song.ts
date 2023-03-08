import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  songId: string;
  @Column()
  name: string;
  @Column()
  songUrl: string;
  @Column()
  thumbnailUrl: string;
}
