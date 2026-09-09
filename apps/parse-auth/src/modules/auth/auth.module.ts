import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service.js';

const SERVICES = [AuthService];

const EXPORTS = [AuthService];

@Module({
  providers: [...SERVICES],
  exports: EXPORTS,
})
export class AuthModule {}
