var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Photos = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

var Photos = mongoose.model("Photos", Photos);

module.exports = Photos;