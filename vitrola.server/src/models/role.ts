import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Role {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column()
  roleId: string;
  @Column()
  name: string;
}

export default Role;
