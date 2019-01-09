const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).then((user)=>{
            console.log(user)
            res.render('user/index', { user: user })
        })
    }
}

module.exports = userController