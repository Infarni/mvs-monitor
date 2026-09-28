
import { createClient } from "nice-grpc";
import { config } from "../../config/config.js";
import { CatalogServiceDefinition } from "@mvs-monitor/proto/backend/v1/catalog";
import { backendChannel } from "../channels/backend.channel.js";


export const catalogClient = createClient(CatalogServiceDefinition, backendChannel)
