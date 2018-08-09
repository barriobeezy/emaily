const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// User is a model class
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrat({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    // we already have a record with the givien profile Id
                    done(null, existingUser);
                } else {
                    // we don't have a user record with this Id, make a new record
                    new User({ googleId: profile.id })
                    .save()
                    // user is the user from the database
                    .then(user => done(null,user));
                };
            });
    })
);
