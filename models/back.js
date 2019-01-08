const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Back = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("Back", Back)