const captainModel = require('../models/captain.model.js');
const captainService = require('../services/captain.service.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle, location } = req.body;

    const iscaptainExists = await captainModel.findOne({ email });
    if (iscaptainExists) {
        return res.status(400).json({ error: "Email already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullname,
        email,
        password: hashPassword,
        vehicle,
        location  
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async (req, res, next) => {
const errors= validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
}

const { email, password } = req.body;

const captain = await captainModel.findOne({ email }).select('+password');

if(!captain){
    return res.status(401).json({message:"Invalid Email or password"})
}
const isMatch= await captain.comparePassword(password);
if(!isMatch){
    return res.status(401).json({message:"Invalid Email or password"})
}
const token = captain.generateAuthToken();
res.cookie('token',token);
res.status(200).json({token,captain});
} 
module.exports.getCaptainProfile = async (req, res, next) => {
 res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res) => {
 const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
 await blacklistTokenModel.create({ token });
  res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}