var router = require('express').Router();
const languageCrtl = require('../controllers/language');


// GET /students
// router.get('/', languageCtrl.index);
router.get('/new', languageCrtl.new);
router.post('/', languageCrtl.create);
router.get('/languageIndex', languageCrtl.index);




// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes



module.exports = router;