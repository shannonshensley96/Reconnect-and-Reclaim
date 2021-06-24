const mongoose = require('mongoose');


const phraseSchema = new mongoose.Schema({
    language: String,
    phrase: String,
    translation: String
})

module.exports = mongoose.model('phrase', phraseSchema);