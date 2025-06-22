const express= require('express');
const router = express.Router();
const {body}= require('express-validator');
const captainController= require("../contollers/captain.controller.js");
const authmiddleware = require('../middlewares/auth.middleware.js');
router.post('/register', [

    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname').isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
    body('fullname.lastname').isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 6 }).withMessage('Plate must be at least 6 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be one of car, bike, or auto'),
],
captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
 captainController.loginCaptain
)

router.get('/profile',[],authmiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout', authmiddleware.authCaptain, async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging out' });
    }
});

module.exports = router;