const BodyPart = require('../models/BodyPart')

const bodyPartController = {
    index: (req, res) => {
        BodyPart.find({}).then((BodyPart) => {
            res.send(BodyPart)
        })
    },
    
}

module.exports = bodyPartController