import { IsNotEmpty, IsPort, IsString } from 'class-validator';
import { IConfig } from '../interfaces/config.interface.js';

export class ConfigDto implements IConfig {
  @IsPort()
  @IsNotEmpty()
  PORT: string;

  @IsString()
  @IsNotEmpty()
  VERSION: string;

  @IsString()
  @IsNotEmpty()
  REDIS_URI: string;

  @IsString()
  @IsNotEmpty()
  DB_URI: string;
}
