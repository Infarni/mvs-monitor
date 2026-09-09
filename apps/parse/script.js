import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const fs = require("node:fs/promises");
const path = require("node:path");

const INPUT_DIR = "./data";
const OUTPUT_FILE = "./service-centers.json";

async function main() {
  const files = (await fs.readdir(INPUT_DIR))
    .filter((file) => file.endsWith(".json"));

  const result = {};

  for (const file of files) {
    console.log(`Processing ${file}...`);

    const filePath = path.join(INPUT_DIR, file);

    const content = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(content);

    const regions = new Map();

    for (const item of json.data ?? []) {
      const regionName = item.region;
      const cityName = item.city;

      // Region
      if (!regions.has(regionName)) {
        regions.set(regionName, new Map());
      }

      const cities = regions.get(regionName);

      // City
      if (!cities.has(cityName)) {
        cities.set(cityName, []);
      }

      // Service center
      cities.get(cityName).push({
        serviceId: item.id,
        name: item.name,
        street: item.street ?? "",
        building: item.building ?? "",
      });
    }

    // Формуємо структуру відповідно до proto
    const response = Array.from(regions.entries()).map(
      ([regionName, cities]) => ({
        name: regionName,

        cities: Array.from(cities.entries()).map(
          ([cityName, serviceCenters]) => ({
            name: cityName,
            serviceCenters: serviceCenters,
          }),
        ),
      }),
    );

    // Назва файлу без .json стає ключем
    const fileName = path.basename(file, ".json");

    result[fileName] = response;
  }

  await fs.writeFile(
    OUTPUT_FILE,
    JSON.stringify(result, null, 2),
    "utf8",
  );

  console.log(`\nDone!`);
  console.log(`Processed ${files.length} files`);
  console.log(`Output: ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
