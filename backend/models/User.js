const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
       required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
          type : Number ,
          default : 0 ,
    },
    amount:{
        type:Number,
    },
    mode:{
        type:String,
    }
})
const User = mongoose.model('User',userSchema);
module.exports = User;