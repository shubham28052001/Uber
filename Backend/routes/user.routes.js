                                 //Route for Register

const express = require('express')
const router = express.Router();
const {body} = require('express-validator') // express-validator ek popular middleware hai jo Express.js me input validation aur sanitization ke liye use hota hai. Ye user ke input ko check karta hai taaki app secure aur bug-free rahe.
const userController= require('../contollers/user.controllers.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

router.post('/register',[
    body('email').isEmail().withMessage('Inavlid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be minimum 3 character'),
     body('fullname.lastname').isLength({min:3}).withMessage('First name must be minimum 3 character'),
      body('password').isLength({min:6}).withMessage('password must be minimum 3 character')
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Inavlid Email'),
    body('password').isLength({min:6}).withMessage('password must be minimum 3 character')
],
userController.loginUser
)

router.post('/profile', [
    body('email').isEmail().withMessage('Inavlid Email'),
],
authMiddleware.authUser // Middleware to authenticate user
,userController.getUserProfile
)

router.post('/logout',[
    body('email').isEmail().withMessage('Inavlid Email')
], 
    authMiddleware.authUser, 
    userController.logoutUser
);






module.exports= router;