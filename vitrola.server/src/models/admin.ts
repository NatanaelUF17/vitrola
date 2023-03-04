import { Column, Entity } from 'typeorm';
import { BaseUser } from './baseUser';

@Entity()
export class Admin extends BaseUser {
  @Column()
  adminId: string;
  @Column()
  username: string;
}
