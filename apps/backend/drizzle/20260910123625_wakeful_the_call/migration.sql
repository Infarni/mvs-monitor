CREATE SCHEMA "backend";
--> statement-breakpoint
CREATE TABLE "backend"."cities" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"region_id" uuid NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backend"."options" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"external_option_id" integer UNIQUE,
	"parent_id" uuid,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backend"."regions" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backend"."service_center_options" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"service_center_id" uuid NOT NULL,
	"option_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backend"."service_centers" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"external_service_center_id" integer NOT NULL,
	"name" varchar NOT NULL,
	"street" varchar NOT NULL,
	"building" varchar NOT NULL,
	"city_id" uuid NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "backend"."cities" ADD CONSTRAINT "cities_region_id_regions_id_fkey" FOREIGN KEY ("region_id") REFERENCES "backend"."regions"("id");--> statement-breakpoint
ALTER TABLE "backend"."options" ADD CONSTRAINT "options_parent_id_options_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_center_options" ADD CONSTRAINT "service_center_options_WgdpFCOOD2xj_fkey" FOREIGN KEY ("service_center_id") REFERENCES "backend"."service_centers"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_center_options" ADD CONSTRAINT "service_center_options_option_id_options_id_fkey" FOREIGN KEY ("option_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_centers" ADD CONSTRAINT "service_centers_city_id_cities_id_fkey" FOREIGN KEY ("city_id") REFERENCES "backend"."cities"("id");