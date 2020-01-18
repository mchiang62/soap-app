var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Creating schema for soaps displayed in the database

var Soaps = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

var Soaps = mongoose.model("Soaps", Soaps);

module.exports = Soaps;