import { INestApplication } from '@nestjs/common';
import { ValidationAdapter } from '../adapters/validation.adapter.js';

export async function enableAdapters(app: INestApplication): Promise<void> {
  ValidationAdapter(app);
}
