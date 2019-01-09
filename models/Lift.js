const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Lift = new Schema({
    name: String,
    weight: Number
});

module.exports = mongoose.model("Lift", Lift)