var router = require('express').Router();
const phraseCrtl = require('../controllers/phrases');


router.post('/languages/:id/phrase', phraseCrtl.create);



module.exports = router;