const user = require('../models/user');


module.exports = {
  index

};





function index(req, res, next) {
  console.log(req.query)
  console.log(req.user)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, user) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('user/index', {
      user,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}