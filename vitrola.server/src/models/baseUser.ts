import Role from './role';

export abstract class BaseUser {
  id: string;
  name: string;
  lastName: string;
  role: Role;
  password: string;
}
