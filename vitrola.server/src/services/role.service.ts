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

  async getAllRoles(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async getRole(id: string): Promise<Role> {
    return await this.roleRepository.findOneBy({ id });
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
      throw error;
    }
  }

  async updateRole(id: string, role: Role): Promise<void> {
    let oldRole = {};

    if (id) {
      oldRole = await this.getRole(id);
    }

    try {
      const newRole = {
        ...oldRole,
        name: role.name,
      };

      await this.roleRepository.save(newRole);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
