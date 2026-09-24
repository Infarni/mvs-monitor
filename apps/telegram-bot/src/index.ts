import { setupBot } from "./bot.js";
import { config } from "./config/config.js";

async function main() {
  const bot = setupBot();

  await bot.start();

  console.log("Started")
}

main().catch();
