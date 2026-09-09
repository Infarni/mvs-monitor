import { Module } from '@nestjs/common';
import { DrizzleService } from './services/drizzle.service.js';

@Module({
  imports: [],
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleDynamicModule {}
