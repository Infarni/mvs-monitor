CREATE SCHEMA "parse_auth";
--> statement-breakpoint
CREATE TABLE "parse_auth"."sessions" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"cookies" json NOT NULL,
	"lock" boolean NOT NULL,
	"operationId" uuid NOT NULL UNIQUE,
	"createdAt" timestamp DEFAULT NOW() NOT NULL,
	"updatedAt" timestamp DEFAULT NOW() NOT NULL
);
