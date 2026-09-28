
import { ChannelCredentials, credentials } from "@grpc/grpc-js";
import { GrpcTransport } from "@protobuf-ts/grpc-transport";
import { config } from "../../config/config.js";
import { TgUserServiceClient } from "@mvs-monitor/proto/backend/v1/tg_user.client";

const transport = new GrpcTransport({host: config.BACKEND_GRPC_CONNECTION_STRING, channelCredentials: ChannelCredentials.createInsecure()});


export const tgUserClient = new TgUserServiceClient(transport);
