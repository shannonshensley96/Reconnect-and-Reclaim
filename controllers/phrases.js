const Language = require('../models/languages');


module.exports = {
 create
};


function create(req, res){
    console.log(req.body,'<- create phrase')
   res.send('hitting add phrase')
}