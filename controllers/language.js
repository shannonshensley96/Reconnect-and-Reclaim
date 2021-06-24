 const { render } = require('ejs');
const Language = require('../models/languages');



module.exports = {
  index,
  new: newLanguage,
  create,
  show
//   delete : deleteLanguage



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

    language.user= req.user._id
    language.save(function(err){
        if (err) return res.redirect('/languages/')
        res.redirect(`/languages/languageIndex`) 
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

        // function deleteLanguage(req, res) {
        //     res.send('hitting the delete route')
        // }
    // Note the cool "dot" syntax to query on the property of a subdoc
//     Language.findOne(
//       {'language._id': req.params.id, 'comments.userId': req.user._id},
//       function(err, language) {
//         if (!language || err) return res.redirect(`languages/languageIndex`);
//         // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
//         language.remove(req.params.id);
//         // Save the updated book
//         language.save(function(err) {
//           // Redirect back to the book's show view
//           res.redirect(`languages/languageIndex`);
//         });
//       }
//     );
//   }