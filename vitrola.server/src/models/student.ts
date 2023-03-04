import { Column, Entity } from 'typeorm';
import { BaseUser } from './baseUser';

@Entity()
export class Student extends BaseUser {
  @Column()
  studentId: string;
  @Column()
  studentDni: string;
  @Column()
  faculty: string;
}
