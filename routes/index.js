const express = require('express')
const router = express.Router()
const BodyAreaController = require('../controllers/BodyAreaController')

router.get('/users', userController.index)
router.get('/bodyarea', BodyAreaController.index)

module.exports = router