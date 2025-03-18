import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { eq } from "drizzle-orm";
import { usersTable } from "@/db/schema/users";

const online_bike_db = SQLite.openDatabaseSync("online_bike.db");
const db = drizzle(online_bike_db);


const databaseService = {
    // List users
    async listUsers(){
        try {
            const users = await db.select().from(usersTable);
            return users;
        } catch (error) {
            console.error("Error listing users:", error);
            return {error: error.message};
        }
    },
    // Get user by email and password
    async getUserByEmailAndPassword(email, password) {
        try {
            const user = await db.select().from(usersTable).where(eq(usersTable.email, email).and(eq(usersTable.password, password)));
            return user;
        } catch (error) {
            console.error("Error getting user by id:", error);
            return {error: error.message};
        }
    },
    // Create user
    async createUser(user) {
        try {
            const result = await db.insert(usersTable).values(user);
            return result;
        } catch (error) {
            console.error("Error creating user:", error);
            return {error: error.message};
        }
    },
    // Update user
    async updateUser(user, id) {
        try {
            const result = await db.update(usersTable).set(user).where(eq(usersTable.id, id));
            return result;
        } catch (error) {
            console.error("Error updating user:", error);
            return {error: error.message};
        }
    },
    // Delete user
    async deleteUser(id) {
        try {
            const result = await db.delete(usersTable).where(eq(usersTable.id, id));
            return result;
        } catch (error) {
            console.error("Error deleting user:", error);
            return {error: error.message};
        }
    },
}

export default databaseService;