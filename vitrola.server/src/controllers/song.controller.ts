import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/song')
export class SongController {
  @Get()
  getSong(): object {
    return {
      message: 'Getting song from controller',
    };
  }
}
