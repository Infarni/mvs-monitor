import { ChannelCredentials, createChannel } from "nice-grpc";
import { config } from "../../config/config.js";

export const backendChannel = createChannel(
  config.BACKEND_GRPC_CONNECTION_STRING,
  ChannelCredentials.createInsecure()
)
