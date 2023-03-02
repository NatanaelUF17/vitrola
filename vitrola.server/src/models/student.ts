import { BaseUser } from './baseUser';

export class Student extends BaseUser {
  studentId: string;
  studentDni: string;
  faculty: string;
}
