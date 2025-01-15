CREATE TYPE "public"."status_enum" AS ENUM('ba-calon', 'calon', 'jamaah', 'alumni');--> statement-breakpoint
CREATE TABLE "profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"nik" text NOT NULL,
	"name" text NOT NULL,
	"ktp" varchar(16) NOT NULL,
	"age" integer,
	"birth_date" date,
	"birth_place" text,
	"address" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"user_id" integer NOT NULL,
	CONSTRAINT "profile_nik_unique" UNIQUE("nik"),
	CONSTRAINT "profile_ktp_unique" UNIQUE("ktp")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"phone" varchar(15) NOT NULL,
	"password" text NOT NULL,
	"status" "status_enum" DEFAULT 'ba-calon',
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email"),
	CONSTRAINT "user_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "nik_index" ON "profile" USING btree ("nik");--> statement-breakpoint
CREATE INDEX "ktp_index" ON "profile" USING btree ("ktp");--> statement-breakpoint
CREATE INDEX "name_index" ON "profile" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "email_index" ON "user" USING btree ("email");--> statement-breakpoint
CREATE INDEX "phone_index" ON "user" USING btree ("phone");