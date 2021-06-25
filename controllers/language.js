 const { render } = require('ejs');
const Language = require('../models/languages');



module.exports = {
  index,
  new: newLanguage,
  create,
  delete: deleteLanguage,
  edit,
  update: updateLanguage,
  show
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
    console.log(req.body, "<- this is from the form");
    // console.log(req.params._id,"<- this is the id")
    const language = new Language(req.body);

    language.user = req.user._id 
    language.save(function(err){
        if (err) return res.redirect('/languages/languageIndex')
        res.redirect(`/languages/${language._id}`) 
    })

}

function deleteLanguage(req, res) {
    Language.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/languages/languageIndex')
   });
  }

  function edit(req,res){
    Language.findById(req.params.id, function(err,language){
        console.log(language,'<- this is the language we will edit ')
        res.render('languages/edit',{language});
    })
}
function updateLanguage(req,res){
    Language.findByIdAndUpdate(req.params.id, req.body, function(err){
        res.redirect('/languages/languageIndex');
    })
}

function show(req,res){

    Language.findById(req.params.id, function(err, languageDoc){
        console.log(languageDoc, " <in language show route")
    res.render('languages/show',{
        languages: languageDoc
    })
    })
}

      