const express = require('express')
const router = express.Router()
const BodyAreaController = require('../controllers/BodyAreaController')
const userController = require('../controllers/userController')


router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
// router.get('/:id', linkController.show)
// router.get('/:id/edit', linkController.edit)
// router.patch('/:id', linkController.update)
// router.delete('/:id', linkController.delete)



router.get('/bodyarea', BodyAreaController.index)

module.exports = router