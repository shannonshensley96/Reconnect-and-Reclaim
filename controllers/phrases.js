const Language = require('../models/languages');


module.exports = {
 create,

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

