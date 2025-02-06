const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");
require("dotenv").config();

passport.use(new GoogleStrategy({
  clientID: process.env.GID,
  clientSecret: process.env.GSECRET,
  callbackURL: "/auth/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      });
    }
    done(null, user);
  } catch (err) {
    done(err, null);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
