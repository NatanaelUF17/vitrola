import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Admin } from 'src/models/admin';
import { AdminService } from 'src/services/admin.service';

@Controller('/api/v1/admin')
export class AdminController {
  constructor(private adminServices: AdminService) {}

  @Get()
  async getAllAdmins(): Promise<Admin[]> {
    return await this.adminServices.getAllAdmins();
  }

  @Get(':id')
  async getAdmin(@Param('id') id: string) {
    return await this.adminServices.getAdmin(id);
  }

  @Post()
  async insertAdmin(@Body() newAdmin: Admin): Promise<void> {
    console.log(newAdmin);
    await this.adminServices.insertAdmin(newAdmin);
  }

  @Put(':id')
  async updateAdmin(@Param('id') id: string, @Body() updatedAdmin: Admin) {
    await this.adminServices.updateAdmin(id, updatedAdmin);
  }
}
