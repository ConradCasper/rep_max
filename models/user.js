const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    age: Number,
    weight: Number,
    bodypart: []
});

module.exports = mongoose.model("User", User)