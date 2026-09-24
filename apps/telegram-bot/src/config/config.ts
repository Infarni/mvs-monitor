import { configDotenv } from "dotenv";
import { configValidator } from "./validators/config.validator.js";
import "reflect-metadata";

const dotEnv = configDotenv({ path: ".env.dev" });

const allEnvs = { ...dotEnv.parsed, ...process.env };

export const config = configValidator(allEnvs as Record<string, unknown>);
