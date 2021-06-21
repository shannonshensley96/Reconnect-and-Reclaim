const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   googleId: String
});
// Create your User Model\

module.exports = mongoose.model('User', userSchema);