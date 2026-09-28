
import { createClient } from "nice-grpc";
import { TgUserServiceDefinition } from "@mvs-monitor/proto/backend/v1/tg_user";
import { backendChannel } from "../channels/backend.channel.js";

export const tgUserClient = createClient(TgUserServiceDefinition, backendChannel)
