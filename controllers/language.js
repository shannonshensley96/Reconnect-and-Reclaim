 const { render } = require('ejs');
const Language = require('../models/languages');


module.exports = {
  new: newLanguage,
  create,
  index

};
function index (req,res){
    Language.find({}, function(err, allLanguageDoc){
            console.log(allLanguageDoc)
            res.render('languages/languageIndex',{
                languages: allLanguageDoc
            })
    })
    
}

function newLanguage(req, res){
    res.render('languages/new')
}

function create(req, res){
    console.log(req.params._id)
    const language = new Language(req.body);

    language.user= req.user._id
    language.save(function(err){
        if (err) return res.redirect('/languages/')
        res.redirect(`/languages/languageIndex`) 
    })
}

