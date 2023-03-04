import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminController } from './controllers/admin.controller';
import { RoleController } from './controllers/role.controller';
import { SongController } from './controllers/song.controller';
import { SongRequestController } from './controllers/song-request.controller';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './services/student.service';
import { SongService } from './services/song.service';
import { AdminService } from './services/admin.service';
import { RoleService } from './services/role.service';
import { SongRequestService } from './services/song-request.service';
import dbConfig from './database/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Role from './models/role';
import { Admin } from './models/admin';
import { Song } from './models/song';

@Module({
  imports: [dbConfig, TypeOrmModule.forFeature([Role, Admin, Song])],
  controllers: [
    AppController,
    AdminController,
    RoleController,
    SongController,
    SongRequestController,
    StudentController,
  ],
  providers: [
    StudentService,
    SongService,
    AdminService,
    RoleService,
    SongRequestService,
  ],
})
export class AppModule {}
