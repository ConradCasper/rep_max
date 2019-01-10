const BodyArea = require('../models/BodyArea')

const bodyAreaController = {
    index: (req, res) => {
        BodyArea.find({}).then((BodyArea) => {
            res.send(BodyArea)
        })
    },
    
}

module.exports = bodyAreaController