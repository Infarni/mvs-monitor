export interface IConfig {
  PORT: string;
  VERSION: string;

  DB_URI: string;

  REDIS_URI: string;

  NATS_URI: string;

  EDS_FILE_PATH: string;
  EDS_PASSWORD: string;
  EDS_PROVIDER: string;
}
