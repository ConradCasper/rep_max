const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')

router.get('/cars', carController.index)

module.exports = router