import { NotificationTargetServiceDefinition } from "@mvs-monitor/proto/backend/v1/notification_target";
import { createClient } from "nice-grpc";
import { backendChannel } from "../channels/backend.channel.js";


export const notificationTargetClient = createClient(NotificationTargetServiceDefinition, backendChannel)
