import {int,  text, sqliteTable} from "drizzle-orm/sqlite-core";

const TABLE_NAME = "users_table";
export const usersTable = sqliteTable(TABLE_NAME, {
    id: int("id").primaryKey({autoIncrement: true}),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    image: text("image").notNull(),
    phone: text("phone").notNull(),
    website: text("website").notNull(),
    created_at : int("created_at", { mode: "timestamp" }).notNull(),
    updated_at : int("updated_at", { mode: "timestamp" }).notNull(),
    deleted_at : int("deleted_at", { mode: "timestamp" }).notNull(),
})