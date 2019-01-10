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
    edit: (req, res) => {
        const userId = req.params.id
        res.render('user/edit', {user})
    },
    update: (req, res) => {
        const newslinkId = req.params.id
        const commentId = req.params.commentId
        console.log(commentId)
        Comment.findByIdAndUpdate(commentId, req.body, {new: true})
        .then((comment) => {
            res.redirect(`/${newslinkId}/comments/${commentId}`)
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