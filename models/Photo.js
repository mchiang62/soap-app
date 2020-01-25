var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Photo = new Schema({
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

var Photo = mongoose.model("Photo", Photo);

module.exports = Photo;