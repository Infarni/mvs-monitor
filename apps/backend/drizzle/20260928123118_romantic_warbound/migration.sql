CREATE SCHEMA "backend";
--> statement-breakpoint
CREATE TABLE "backend"."cities" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"name" varchar NOT NULL,
	"region_id" uuid NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "backend"."notification_targets" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"service_center_id" uuid NOT NULL,
	"option_id" uuid NOT NULL,
	"tg_user_id" uuid,
	"notification_target_type" integer DEFAULT 1 NOT NULL
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
CREATE TABLE "backend"."tg_users" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"telegram_id" bigint NOT NULL UNIQUE,
	"phone_number" text NOT NULL UNIQUE,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "service_center_id_option_id_tg_user_id_type" ON "backend"."notification_targets" ("service_center_id","option_id","tg_user_id","notification_target_type");--> statement-breakpoint
CREATE UNIQUE INDEX "service_center_id_option_id" ON "backend"."service_center_options" ("service_center_id","option_id");--> statement-breakpoint
ALTER TABLE "backend"."cities" ADD CONSTRAINT "cities_region_id_regions_id_fkey" FOREIGN KEY ("region_id") REFERENCES "backend"."regions"("id");--> statement-breakpoint
ALTER TABLE "backend"."notification_targets" ADD CONSTRAINT "notification_targets_service_center_id_service_centers_id_fkey" FOREIGN KEY ("service_center_id") REFERENCES "backend"."service_centers"("id");--> statement-breakpoint
ALTER TABLE "backend"."notification_targets" ADD CONSTRAINT "notification_targets_option_id_options_id_fkey" FOREIGN KEY ("option_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."notification_targets" ADD CONSTRAINT "notification_targets_tg_user_id_tg_users_id_fkey" FOREIGN KEY ("tg_user_id") REFERENCES "backend"."tg_users"("id");--> statement-breakpoint
ALTER TABLE "backend"."options" ADD CONSTRAINT "options_parent_id_options_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_center_options" ADD CONSTRAINT "service_center_options_WgdpFCOOD2xj_fkey" FOREIGN KEY ("service_center_id") REFERENCES "backend"."service_centers"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_center_options" ADD CONSTRAINT "service_center_options_option_id_options_id_fkey" FOREIGN KEY ("option_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."service_centers" ADD CONSTRAINT "service_centers_city_id_cities_id_fkey" FOREIGN KEY ("city_id") REFERENCES "backend"."cities"("id");