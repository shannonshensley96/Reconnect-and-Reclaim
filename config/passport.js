const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) { // verify callback
  // a user has logged in via OAuth!
  console.log(profile, "<----- Profile")
  // profile will have the googleId attached to it
  // Fetch the User from the database and provide them back to passport 

  // Check to see if a User exists with the googleId in our database
  // if they do lets just setup the user and call the cb function
  // proceed in the middleware chain
  // profile.id is the googleId
  User.findOne({'googleId': profile.id}, function(err, userDoc){
    //googleId is a property on the model that we are searching for the value
    if(err) return cb(err);

    if(userDoc){
      // If that user exists 
      // lets proceed in the middleware chain to passport!
      // signature for the cb function is cb(error, UserDocument)
      return cb(null, userDoc)
    } else {
        // if the user doesn't exist we want to create a new User
         // and save them to our database and include that actually googleId to identify the user
         const newUser = new User({
           name: profile.displayName,
           email: profile.emails[0].value,
           googleId: profile.id
         })

         newUser.save(function(err){
          if(err) return cb(err);
          // cb provides the information to passport and pass along in the middleware chain
          return cb(null, newUser)

         });
    }
  });
}
));




passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});