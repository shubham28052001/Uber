                                     // User Schema + Password Functions
                                     
const mongoose = require('mongoose');
 const bcrypt = require ('bcrypt');
 const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be minimum 3 character']
        },
        lastname: {
            type: String,
            minlength: [3, 'First name must be minimum 3 character']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true, // do users same email na rakh saken
        minlength: [5, 'Email must be minimum 5 character']
    },
    password: {
        type: String,
        required: true,
        select: false // ⛔ यह password को find() या findOne() में by default exclude कर देगा
    },
    SocketId:{  // for live tracking 
        type:String,
    }
})


   //जब user login करता है, तो उसे एक token मिल जाता है।
   //फिर हर बार जब वो API call करता है, वो token भेजता है।
  //Backend उसी token से पहचान लेता है: "ये वही user है जिसने login किया था।"
  //jwt.sign(...) — यह JWT token बनाता है।
  //token में हम user की _id डाल रहे हैं ताकि यह पहचान सके कि यह token किस user का है।
  // this._id==यह इस method को call करने वाले user document का _id है

userSchema.methods.generateAuthToken= function(){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn: '24h'}); 
    return token;
}

/*bcrypt.compare(password, this.password)
 यह bcrypt का function है जो:

user के द्वारा दिया गया plain password

और database में stored hashed password
को compare करता है।

अगर दोनों match करते हैं ➜ true
नहीं करते ➜ false*/

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

//Agar tumhare paas user ki file (object) है, to tum uske andar ka password change (encrypt) कर सकते हो → ये काम methods karega.

//Agar tumhare paas koi file नहीं है, बस ek password hai jo tumhe encrypt karna hai → ये काम statics karega

userSchema.statics.hashPassword = async function (plainPassword) {
  return await bcrypt.hash(plainPassword, 10);
};

const userModel= mongoose.model('user',userSchema); // collection in database

module.exports = userModel;