const express = require('express')
const router = express.Router()
const BodyAreaController = require('../controllers/BodyAreaController')
const userController = require('../controllers/userController')


router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:userId', userController.show)
// router.get('/:id/edit', userController.edit)
// router.patch('/:id', userController.update)
// router.delete('/:id', userController.delete)



router.get('/bodyarea', bodyAreaController.index)

module.exports = router