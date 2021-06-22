var router = require('express').Router();
var usersCtrl = require('../controllers/user');
const mayataanCtrl = require('../controllers/mayataan.js');
const quechuaCtrl = require('../controllers/quechua');
const muysccubunCtrl = require('../controllers/muysccubun');
const nahuatlCtrl = require('../controllers/nahuatl');


// GET /students
router.get('/', usersCtrl.index);
router.get('/mayataan', mayataanCtrl.new);
router.get('/quechua', quechuaCtrl.new );
router.get('/muysccubun', muysccubunCtrl.new);
router.get('/nahuatl', nahuatlCtrl.new);



// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;