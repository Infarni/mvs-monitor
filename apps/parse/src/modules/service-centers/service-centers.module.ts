import { Module } from '@nestjs/common';
import { DrizzleDynamicModule } from '../../dynamic-modules/drizzle/drizzle.module.js';
import { RegionRepository } from './repositories/region.repository.js';
import { CityRepository } from './repositories/city.repository.js';
import { ServiceCenterRepository } from './repositories/service-center-repository.js';
import { RegionService } from './services/region.service.js';
import { CityService } from './services/city.service.js';
import { ServiceCenterService } from './services/service-center.service.js';
import { GetRegionsUseCase } from './use-cases/get-regions.use-case.js';
import { GetCitiesUseCase } from './use-cases/get-cities.use-case.js';
import { GetServiceCentersUseCase } from './use-cases/get-service-centers.use-case.js';
import { RegionController } from './controllers/region.controller.js';
import { CityController } from './controllers/city.controller.js';
import { ServiceCenterController } from './controllers/service-center.controller.js';

const IMPORTS = [DrizzleDynamicModule];

const CONTROLLERS = [RegionController, CityController, ServiceCenterController];

const USE_CASES = [
  GetRegionsUseCase,
  GetCitiesUseCase,
  GetServiceCentersUseCase,
];

const SERVICES = [RegionService, CityService, ServiceCenterService];

const REPOSITORIES = [
  RegionRepository,
  CityRepository,
  ServiceCenterRepository,
];

@Module({
  imports: IMPORTS,
  controllers: CONTROLLERS,
  providers: [...USE_CASES, ...SERVICES, ...REPOSITORIES],
})
export class ServiceCentersModule {}
