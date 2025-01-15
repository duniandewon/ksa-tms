import { relations } from "drizzle-orm";
import { pgEnum, pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status_enum", [
  "ba-calon",
  "calon",
  "jamaah",
  "alumni",
]);

export const user = pgTable(
  "user",
  {
    id: t.serial("id").primaryKey(),
    email: t.text("email").notNull().unique(),
    phone: t.varchar("phone", { length: 15 }).notNull().unique(),
    password: t.text("password").notNull(),
    status: statusEnum().default("ba-calon"),
    createdAt: t.timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    t.uniqueIndex("email_index").on(table.email),
    t.index("phone_index").on(table.phone),
  ]
);

export const userRelations = relations(user, ({ one }) => ({
  profile: one(profile),
}));

export const profile = pgTable(
  "profile",
  {
    id: t.serial("id").primaryKey(),
    nik: t.text("nik").notNull().unique(),
    name: t.text("name").notNull(),
    ktp: t.varchar("ktp", { length: 16 }).notNull().unique(),
    age: t.integer("age"),
    birthDate: t.date("birth_date"),
    birthPlace: t.text("birth_place"),
    address: t.text("address"),
    createdAt: t.timestamp("created_at").defaultNow().notNull(),
    userId: t
      .integer("user_id")
      .notNull()
      .references(() => user.id, {onDelete: "cascade"}),
  },
  (table) => [
    t.uniqueIndex("nik_index").on(table.nik),
    t.index("ktp_index").on(table.ktp),
    t.index("name_index").on(table.name),
  ]
);

export const profileRelations = relations(profile, ({ one }) => ({
  user: one(user, { fields: [profile.userId], references: [user.id] }),
}));
