export interface IConfig {
  PORT: string;
  VERSION: string;

  REDIS_URI: string;

  BACKEND_GRPC_CONNECTION_STRING: string;
}
