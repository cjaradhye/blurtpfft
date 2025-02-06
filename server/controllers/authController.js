const passport = require("passport");

exports.googleAuth = passport.authenticate("google", { scope: ["profile", "email"] });
exports.googleCallback = passport.authenticate("google", { failureRedirect: "/" });
exports.redirectAfterLogin = (req, res) => res.redirect("/dashboard");

exports.logout = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/");
  });
};