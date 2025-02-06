const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const secret = process.env.GSECRET;
const clientid = process.env.GID;

passport.use(new GoogleStrategy({
  clientID: clientid,
  clientSecret: secret,
  callbackURL: "/auth/google/callback",
}, (accessToken, refreshToken, profile, done) => {
  // Handle user profile here (e.g., find or create user in DB)
  done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;