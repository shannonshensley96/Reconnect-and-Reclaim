const Language = require('../models/languages');


module.exports = {
 create
};


function create(req, res) {
    Language.findById(req.params.id, function(err, language) {
    language.phrase.push(req.body);
     language.save(function(err) {
        res.redirect(`/languages/${language._id}`,{
            // language: language
        });
    });
    });
  }