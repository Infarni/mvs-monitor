import { SERVICE_CENTERS_MOCK } from './constants/service-centers-mock.constant.js';
import * as fs from 'fs/promises';

type ServiceCenter = {
  serviceId: number;
  name: string;
  street: string;
  building: string;
};

type Region = {
  name: string;
  cities: {
    name: string;
    serviceCenters: ServiceCenter[];
  }[];
};

type ServiceCenterWithOptions = ServiceCenter & {
  optionIds: number[];
};

type ResultRegion = {
  name: string;
  cities: {
    name: string;
    serviceCenters: ServiceCenterWithOptions[];
  }[];
};

function uniqueRegions(data: Record<number, Region[]>): ResultRegion[] {
  const regionsMap = new Map<string, ResultRegion>();

  for (const [optionIdString, regions] of Object.entries(data)) {
    const optionId = Number(optionIdString);

    for (const region of regions) {
      let targetRegion = regionsMap.get(region.name);

      if (!targetRegion) {
        targetRegion = {
          name: region.name,
          cities: [],
        };

        regionsMap.set(region.name, targetRegion);
      }

      for (const city of region.cities) {
        let targetCity = targetRegion.cities.find(
          (item) => item.name === city.name,
        );

        if (!targetCity) {
          targetCity = {
            name: city.name,
            serviceCenters: [],
          };

          targetRegion.cities.push(targetCity);
        }

        for (const serviceCenter of city.serviceCenters) {
          const existingCenter = targetCity.serviceCenters.find(
            (item) =>
              item.serviceId === serviceCenter.serviceId &&
              item.name === serviceCenter.name &&
              item.street === serviceCenter.street &&
              item.building === serviceCenter.building,
          );

          if (existingCenter) {
            if (!existingCenter.optionIds.includes(optionId)) {
              existingCenter.optionIds.push(optionId);
            }
          } else {
            targetCity.serviceCenters.push({
              ...serviceCenter,
              optionIds: [optionId],
            });
          }
        }
      }
    }
  }

  return [...regionsMap.values()];
}

async function w() {
  const result = uniqueRegions(SERVICE_CENTERS_MOCK);

  await fs.writeFile('result.json', JSON.stringify(result, null, 2));
}

w()
  .then(() => {
    console.log('Done');
  })
  .catch(console.error);
