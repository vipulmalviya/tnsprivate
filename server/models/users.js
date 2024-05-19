// users.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: false },
  password: { type: String, required: true, minlength: 5 },
  token:{
    type:String,
    default:null
  } 
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
