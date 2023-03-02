import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDto } from 'src/models/Dtos/roleDto';
import Role from 'src/models/role';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  getAllRoles(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  getRole(id: string): Promise<Role> {
    return this.roleRepository.findOneBy({ id });
  }

  async insertRole(role: RoleDto): Promise<void> {
    const newRole: Role = {
      roleId: uuidv4(),
      name: role.name,
    };

    try {
      await this.roleRepository.insert(newRole);
    } catch (error) {
      console.log(error);
    }
  }
}
