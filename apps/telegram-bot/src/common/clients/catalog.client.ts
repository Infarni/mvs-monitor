import { CatalogServiceClient } from "@mvs-monitor/proto/backend/v1/catalog";
import { config } from "../../config/config.js";
import { credentials } from "@grpc/grpc-js";


export const catalogClient = new CatalogServiceClient(config.BACKEND_GRPC_CONNECTION_STRING, credentials.createInsecure());
