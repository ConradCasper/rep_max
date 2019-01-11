const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BodyArea = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("BodyArea", BodyArea)