const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Chest = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("Chest", Chest)