const express = require('express')
const { loginController,registerController} = require('../controllers/userControllers')


const router = express.Router()

//routes
//Method - get
router.post('/login' ,loginController)

//Method - POST
router.post('/register', registerController)


module.exports = router