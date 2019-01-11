const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    age: Number,
    weight: Number,
    bodyPart: [{
        type: Schema.Types.ObjectId,
        ref: "BodyPart"
    }]
});

module.exports = mongoose.model("User", User)