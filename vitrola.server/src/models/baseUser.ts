import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseUser {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  role: string;
  @Column()
  password: string;
}
