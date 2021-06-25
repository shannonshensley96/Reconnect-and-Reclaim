const mongoose = require('mongoose');

const phrasesSchema = new mongoose.Schema({
    phrase: String,
    translation: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const languageSchema = new mongoose.Schema({
    language:{
          type: String,
          enum : ['Mayatàan','Quechua','Nahuatl','Muysccubun'],
          default: 'Mayatàan',
      },
     details: String,
     user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
     phrases: [phrasesSchema]
     // add whatever other attributes you want below that then
  })



module.exports = mongoose.model('language', languageSchema);

