import { Controller, Get } from '@nestjs/common';
@Controller('api/v1')
export class AppController {
  @Get()
  getApiMessage(): object {
    return {
      message: 'Welcome to the API',
    };
  }
}
