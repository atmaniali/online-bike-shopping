import {databaseService} from "./databaseService";


const userService = {
    // get users
    async listUsers() {
        const response = await databaseService.listUsers();
        if (response?.error) {
            return {error: response.error};
        }
        return {data:response};
    },
    // create user
    async createUser(user) {
        if(!user) {
            return {error: "User is required"};
        }
        const response = await databaseService.createUser(user);
        if (response?.error) {
            return {error: response.error};
        }
        return {data:response};
    },
    // update user
    async updateUser(user, id) {
        if(!id){
            return{error: "Id is required"}
        }

        if(!user) {
            return {error: "User content is required"};
        }

        const response = await databaseService.updateUser(user);

        if (response?.error) {
            return {error: response.error};
        }
        return {data:response};
    },
    // delete user
    async deleteUser(id) {
        if(!id){
            return{error: "Id is required"}
        }

        const response = await databaseService.deleteUser(id);

        if(response?.error){
            return {error: response.error};
        }
        return {success:true};
    },
}

export default userService;