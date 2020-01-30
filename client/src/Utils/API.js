import axios from "axios";

//get all products
export default {
    getSoaps: function() {
        return axios.get("/api/soaps");
    },
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