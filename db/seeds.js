const BodyPart = require('../models/BodyPart')
const Lift = require('../models/Lift')
const User = require('../models/User')
const mongoose = require('mongoose')



const curl = new Lift({
    name: "Curl",
    weight: 50
})

const pullup = new Lift({
    name: "Pull Up",
    rep: 25
})

const arms = new BodyPart({
    name: "arms",
    lifts: []
})

const conrad = new User({
    name: "Conrad",
    age: 27,
    weight: 185,
    bodyPart: [arms]
})

const conrad2 = new User({
    name: "Conrad 2",
    age: 27,
    weight: 185,
    bodyPart: [arms]
})

User.deleteMany({})
.then(()=> BodyPart.deleteMany({}))
.then(()=> Lift.deleteMany({}))
.then(()=> Lift.insertMany([curl, pullup]))
.then(()=> BodyPart.insertMany([arms]))
.then(()=> conrad.save())
.then(()=> conrad2.save())
.then(()=> console.log("Database Seeded Successfully"))
.then(()=> mongoose.connection.close())