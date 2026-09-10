import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { InsertOptionSchema, optionsTable } from "../dynamic-modules/drizzle/schemas/option.schema.js";
import { IOptionDataItem, OPTIONS_DATA } from "./data/options.data.js";
import { randomUUID } from "crypto";

function GetOptionRows(options: IOptionDataItem[], parentId?: string): InsertOptionSchema[] {
  let optionRows: InsertOptionSchema[] = [];

  for (const option of options) {
    if (option.options?.length) {
      const childParentId = randomUUID();

      optionRows.push({
        id: childParentId,
        name: option.name,
        parentId,
      })

      const childrenRows = GetOptionRows(option.options, childParentId);

      optionRows = [...optionRows, ...childrenRows];
    } else {
      optionRows.push({
        id: randomUUID(),
        name: option.name,
        externalOptionId: option.externalOptionId,
        parentId,
      })
    }
  }

  return optionRows;
}

export async function seedOptions(db: NodePgDatabase) {
  const optionRows: InsertOptionSchema[] = GetOptionRows(OPTIONS_DATA);

  await db.insert(optionsTable).values(optionRows)
}
