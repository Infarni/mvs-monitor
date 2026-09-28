CREATE TYPE "backend"."sc_notification_target_type" AS ENUM('telegram');--> statement-breakpoint
CREATE TABLE "backend"."sc_notification_targets" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7(),
	"service_center_id" uuid NOT NULL,
	"option_id" uuid NOT NULL,
	"tg_user_id" uuid NOT NULL,
	"type" "backend"."sc_notification_target_type" NOT NULL
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
ALTER TABLE "backend"."sc_notification_targets" ADD CONSTRAINT "sc_notification_targets_TRdoI9RkgWgO_fkey" FOREIGN KEY ("service_center_id") REFERENCES "backend"."service_centers"("id");--> statement-breakpoint
ALTER TABLE "backend"."sc_notification_targets" ADD CONSTRAINT "sc_notification_targets_option_id_options_id_fkey" FOREIGN KEY ("option_id") REFERENCES "backend"."options"("id");--> statement-breakpoint
ALTER TABLE "backend"."sc_notification_targets" ADD CONSTRAINT "sc_notification_targets_tg_user_id_tg_users_id_fkey" FOREIGN KEY ("tg_user_id") REFERENCES "backend"."tg_users"("id");