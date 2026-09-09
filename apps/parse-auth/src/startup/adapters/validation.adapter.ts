import { INestApplication, ValidationPipe } from '@nestjs/common';

export function ValidationAdapter(app: INestApplication): void {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}
