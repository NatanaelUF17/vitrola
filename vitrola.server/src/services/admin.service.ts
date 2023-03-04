import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encode } from 'punycode';
import { Admin } from 'src/models/admin';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async getAllAdmins(): Promise<Admin[]> {
    return await this.adminRepository.find();
  }

  async getAdmin(id: string): Promise<Admin> {
    return await this.adminRepository.findOneBy({ id });
  }

  async insertAdmin(admin: Admin): Promise<void> {
    const newAdmin: Admin = {
      adminId: uuidv4(),
      name: admin.name,
      lastName: admin.lastName,
      username: admin.username,
      password: encode(admin.password),
      role: '',
    };

    try {
      await this.adminRepository.insert(newAdmin);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateAdmin(id: string, admin: Admin): Promise<void> {
    let oldAdmin = {};

    if (id) {
      oldAdmin = await this.getAdmin(id);
    }

    try {
      const newAdmin = {
        ...oldAdmin,
        name: admin.name,
        lastName: admin.lastName,
        username: admin.username,
      };

      await this.adminRepository.save(newAdmin);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
