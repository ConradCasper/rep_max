const express = require('express')
const router = express.Router()
const bodyAreaController = require('../controllers/bodyAreaController')
const userController = require('../controllers/userController')


router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
// router.get('/:id/edit', userController.edit)
// router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)



router.get('/bodyarea', bodyAreaController.index)

module.exports = router