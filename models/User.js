const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: [
            function(input) {
              return input.length >= 6;
            },
            "Password should be longer."
          ]
    },
    password2: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;