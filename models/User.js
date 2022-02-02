const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name:{type:String,required:true,minlenght:3,maxlenght:50},
  email:{type:String,required:true,minlenght:3,maxlenght:100},
  password:{type:String,required:true,minlenght:6,maxlenght:200},
  admin:{type:Boolean,default:false},
  createAt:{type:Date,default:Date.now}
})

module.exports = mongoose.model('User',UserSchema)