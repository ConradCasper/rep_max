const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Legs = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("Legs", Legs)