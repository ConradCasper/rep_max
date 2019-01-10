const User = require('../models/User')
const BodyArea = require('../models/BodyArea')
const Lift = require ('../models/Lift')
const userController = {
    index: (req, res) => {
        User.find({}).then((user)=>{
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
        }).then(newUser =>{
            res.redirect('/')
        })
    },
    show:(req, res) => {
        const userId = req.params.userId
        User.findById(userId).populate('BodyArea').then((user)=>{
            console.log(user)
            res.render('user/show', {user})
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