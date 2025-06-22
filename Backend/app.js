                            //Express App Setup


const dotenv = require('dotenv');//Secret information (.env) file me safely store karne ke liye
dotenv.config();

const express = require('express') //for HAndling Backend 
const cors = require('cors') //Alag-alag servers/domains ke beech data exchange allow karne ke liye ,Ab React (3000) backend (5000)
const app = express();
const cookieParser = require('cookie-parser'); //Cookies ko parse karne ke liye
const connectToDb =require('./Db/db.js')

const userRoutes= require('./routes/user.routes.js')
const captainroutes= require('./routes/captain.routes.js');
connectToDb();
app.use(cors({
    credentials: true }, // for allowing credentials like cookies
)); // for Enabling cors
app.use(express.json());// JSON body read kare
app.use(express.urlencoded({extended:true})) ;// URL encoded body read kare
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('helllo');
})

app.use('/users',userRoutes);// /users/register route active ho gaya
app.use('/captains',captainroutes);// /captains/register route active ho gaya
module.exports = app;