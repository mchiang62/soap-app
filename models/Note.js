var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Note = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    noteText: {
        type: String,
        trim: true,
        required: true
    }

});

var Note = mongoose.model("Note", Note);

module.exports = Note;