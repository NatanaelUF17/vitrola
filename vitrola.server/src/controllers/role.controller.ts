import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleDto } from 'src/models/Dtos/roleDto';
import Role from 'src/models/role';
import { RoleService } from 'src/services/role.service';

@Controller('/api/v1/role')
export class RoleController {
  constructor(private roleServices: RoleService) {}

  @Get()
  async getAllRoles(): Promise<Role[]> {
    return await this.roleServices.getAllRoles();
  }

  @Post()
  async insertRole(@Body() newRole: RoleDto): Promise<void> {
    console.log(newRole);
    await this.roleServices.insertRole(newRole);
  }
}
