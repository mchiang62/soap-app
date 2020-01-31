import axios from "axios";

//get all products
export default {
    getSoaps: function() {
        return axios.get("/api/soaps");
    },
    getSoap: function(id){
        return axios.get("/api/soaps/" + id);
    },
    saveSoap: function(soapData) {
        return axios.post("/api/soaps", soapData);
    },
    deleteSoap: function(id) {
        return axios.delete("/api/soaps/" + id);
    },
    getPhoto: function(id) {
        return axios.get("/api/photo" + id);
    }
    
};