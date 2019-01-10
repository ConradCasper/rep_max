// const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost/rep-max").then(() => {
//     console.log("MONGODB is now connected")
// })

// module.exports = mongoose;

require('dotenv').config()

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}) 

module.exports = mongoose