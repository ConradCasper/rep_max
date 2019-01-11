const User = require('../models/User')
const BodyPart = require('../models/BodyPart')
const Lift = require('../models/Lift')
const userController = {
    index: (req, res) => {
        User.find({}).then((user) => {
            console.log(user)
            res.render('user/index', { user: user })
        })
    },
    new: (req, res) => {
        res.render('user/new')
    },
    create: (req, res) => {
        User.create({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight
        }).then(newUser => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const userId = req.params.id
        console.log(userId)
        User.findById(userId).populate('bodyPart').then((user) => {
            const bodyPart = user.bodyPart

            res.render('user/show', { user: user, bodyPart: bodyPart })
        })

    },
    edit: (req, res) => {
        const userId = req.params.id
        res.render('user/edit', { userId })
    },
    update: (req, res) => {
        const userId = req.params.id
        User.findByIdAndUpdate(userId, req.body, { new: true })
            .then((user) => {
                res.redirect(`/`)
            })
    },
    delete: (req, res) => {
        const userId = req.params.id
        User.findByIdAndDelete(userId)
            .then(() => {
                res.redirect(`/`)
            })
    }

}

module.exports = userController