import { Song } from './song';
import { Student } from './student';

export class SongRequest {
  id: string;
  songRequestId: string;
  song: Song;
  student: Student;
  songRequestDate: Date;
  isForAddingNewSong: boolean;
  isForPlayingSong: boolean;
}
