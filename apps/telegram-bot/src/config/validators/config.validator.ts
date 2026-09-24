import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { ConfigDto } from '../dto/config.dto.js';
import { IConfig } from '../interfaces/config.interface.js';

export function configValidator(config: Record<string, unknown>): IConfig {
  const validatedConfig = plainToInstance(ConfigDto, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    console.error(
      'Invalid env vars: ',
      errors.map((error) => ({
        property: error.property,
        value: error.value,
        constraints: error.constraints,
      })),
    );
    process.exit(1);
  }

  return validatedConfig;
}
