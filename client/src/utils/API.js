import axios from "axios";

//get all products
export default {
    getSoaps: function() {
        return axios.get("/api/soaps");
    },
    // Saves a user to the database
    saveUser: function(userRegister) {
    return axios.post("/api/user", userRegister);
  }
};