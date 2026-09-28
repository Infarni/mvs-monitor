import { NotificationTargetServiceClient } from "@mvs-monitor/proto/backend/v1/notification_target";
import { config } from "../../config/config.js";
import { credentials } from "@grpc/grpc-js";

export const notificationTargetClient = new NotificationTargetServiceClient(config.BACKEND_GRPC_CONNECTION_STRING, credentials.createInsecure());
