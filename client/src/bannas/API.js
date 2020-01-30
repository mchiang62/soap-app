import axios from "./node_modules/axios";

//get all products
export default {
    getSoaps: function() {
        return axios.get("/api/soaps");
    },
    saveUser: function(){
        return axios.post("/api/users", userData);
    }
    // getSoap: function(){
    //     return axios.get("/api/soaps/" + id);
    // },
    // saveSoap: function() {
    //     return axios.post("/api/soaps", soapData);
    // },
    // deleteSoap: function() {
    //     return axios.delete("/api/soaps/" + id);
    // },
    // getPhoto: function() {
    //     return axios.get("/api/photo" + id);
    // } 
};