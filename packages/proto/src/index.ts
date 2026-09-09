import { createRequire } from "node:module";
import { readdirSync } from 'node:fs';import { join } from "node:path";


const require = createRequire(import.meta.url);

export function getProtoFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      return getProtoFiles(path);
    }

    return entry.name.endsWith('.proto') ? [path] : [];
  });
}

export function getProtoPaths() {
  return {
    parseAuth: { v1: getProtoFiles(require.resolve("@mvs-monitor/proto/proto/parse_auth/v1/parse_auth.proto").split("/")[-1] as string)},
    parse: { v1: getProtoFiles(require.resolve("@mvs-monitor/proto/proto/parse/v1/parse.proto").split("/")[0] as string)}
  }
}
