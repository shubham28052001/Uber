const userModel = require('../models/User.model.js');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model.js');
const captainModel=require('../models/captain.model.js');
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const isblacklisted = await blacklistTokenModel.findOne({ token:token });
     if (isblacklisted) {
     return res.status(401).json({ message: 'Unauthorized: Token is blacklisted' });   
    }    
    try {
        
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("Decoded JWT:", decoded); 
const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports.authCaptain= async (req,res,next)=>{
 const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
 console.log(token);
 
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const isblacklisted = await blacklistTokenModel.findOne({ token:token });
    console.log("Is token blacklisted:", isblacklisted);
     if (isblacklisted) {
     return res.status(401).json({ message: 'Unauthorized: Token is blacklisted' });   
    }    
    try {
        
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("Decoded JWT:", decoded); 
const captain = await captainModel.findById(decoded._id);
  req.captain=captain;
  return next();
    } catch (error) {
        console.log(error);
        
        return res.status(401).json({ message: 'Invalid token' });
    }
}