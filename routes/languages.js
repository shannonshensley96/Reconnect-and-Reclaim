var router = require('express').Router();
var usersCtrl = require('../controllers/user');
const languagesCtrl = require('../controllers/languages')
// GET /students
router.get('/', usersCtrl.index);

router.get('/mayataan', languagesCtrl.new);

// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;