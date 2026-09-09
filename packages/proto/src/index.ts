import { readdirSync } from 'node:fs';import {join } from "node:path";
import { fileURLToPath } from 'node:url';


export function getProtoFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      return getProtoFiles(path);
    }

    return entry.name.endsWith('.proto') ? [path] : [];
  });
}

export function getProtoPaths(): string[] {
  const protoDirPath = fileURLToPath(import.meta.resolve("@mvs-monitor/proto/proto"));

  return getProtoFiles(protoDirPath)
}
