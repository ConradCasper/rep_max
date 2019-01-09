const BodyArea = require('../models/BodyArea')

const BodyAreaController = {
    index: (req, res) => {
        BodyArea.find({}).then((BodyArea) => {
            res.send(BodyArea)
        })
    }
}

module.exports = BodyAreaController