CREATE SCHEMA "parse";
--> statement-breakpoint
CREATE TABLE "parse"."cities" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"region_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "parse"."regions" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"option_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "parse"."service_centers" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"service_id" integer NOT NULL,
	"name" varchar NOT NULL,
	"street" varchar NOT NULL,
	"building" varchar NOT NULL,
	"city_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "parse"."cities" ADD CONSTRAINT "cities_region_id_regions_id_fkey" FOREIGN KEY ("region_id") REFERENCES "parse"."regions"("id");--> statement-breakpoint
ALTER TABLE "parse"."service_centers" ADD CONSTRAINT "service_centers_city_id_cities_id_fkey" FOREIGN KEY ("city_id") REFERENCES "parse"."cities"("id");