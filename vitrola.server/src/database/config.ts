import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from 'src/models/song';
import { SongRequest } from 'src/models/songRequest';

const dbConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'vitrola',
  entities: [Song, SongRequest],
});

export default dbConfig;
