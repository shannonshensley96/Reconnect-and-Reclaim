const Language = require('../models/languages');


module.exports = {
 create,
 edit: phraseEdit, 
 update: updatePhrase
};


function create(req, res) {
    console.log(req.body)
    Language.findById(req.params.id, function(err, language) {
    language.phrases.push(req.body);
     language.save(function(err) {
        res.redirect(`/languages/${language._id}`);
      });
    });
  }

  function phraseEdit(req, res){
      res.send('hitting edit')
  }

  function updatePhrase(req, res){
      res.send('hitting update route')
  }