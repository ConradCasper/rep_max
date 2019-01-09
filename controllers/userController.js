const User = require('../models/User')

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
    }

}

module.exports = userController