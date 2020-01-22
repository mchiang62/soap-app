import axios from "axios";

//get all products
export default {
    getSoaps: function() {
        return axios.get("/api/soaps");
    }
};