const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BodyPart = new Schema({
    name: String,
    lifts: []
});

module.exports = mongoose.model("BodyPart", BodyPart)