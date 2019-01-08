const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Arms = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("Arms", Arms)