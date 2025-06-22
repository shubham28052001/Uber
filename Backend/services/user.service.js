                              // User DB Logic
                              
const userModel = require('../models/User.model.js');

module.exports.createUSer=async ({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password){
        throw new Error('Please fill in all fields')
    }
    const user=await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}