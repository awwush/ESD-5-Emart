
// not required schema

const { model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    password : String
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;