const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BodyArea = new Schema({
    name: String,
    muscle: String,
    lifts: [{
        type: Schema.Types.ObjectId,
        ref: "Lift"
    }]
});

module.exports = mongoose.model("BodyArea", BodyArea)