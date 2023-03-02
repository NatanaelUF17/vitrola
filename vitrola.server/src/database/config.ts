import { TypeOrmModule } from '@nestjs/typeorm';
import Role from 'src/models/role';

const dbConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'vitrola',
  entities: [Role],
});

export default dbConfig;
