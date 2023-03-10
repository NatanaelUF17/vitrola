import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const options: CorsOptions = {
  origin: 'http://localhost:5173/',
  credentials: false,
};
