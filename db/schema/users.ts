import {int,  text, sqliteTable} from "drizzle-orm/sqlite-core";

const TABLE_NAME = "users_table";
export const usersTable = sqliteTable(TABLE_NAME, {
    id: int("id").primaryKey({autoIncrement: true}),
    name: text("name"),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    confirm_password: text("confirm_password").notNull(),
    image: text("image"),
    phone: text("phone"),
    website: text("website"),
    created_at : int("created_at", { mode: "timestamp" }),
    updated_at : int("updated_at", { mode: "timestamp" }),
    deleted_at : int("deleted_at", { mode: "timestamp" }),
})