// const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require("body-parser");
// const session = require('express-session');
// const passport = require('./passport'); // Import the passport setup
// require("dotenv").config();

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(session({
//   secret: process.env.GSECRET,
//   resave: false,
//   saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // MongoDB Connection
// mongoose.connect(process.env.MONGOURL)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Error connecting to MongoDB:", err));

// // Mongoose User Schema
// const userSchema = new mongoose.Schema({
//   googleId: String,
//   name: String,
//   email: String,
// });
// const User = mongoose.model('User', userSchema);

// // Routes
// app.get('/', (req, res) => res.send('Welcome to the App!'));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => res.redirect('/dashboard'));

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/');
// }

// app.get('/dashboard', isLoggedIn, (req, res) => {
//   res.send(`Welcome ${req.user.displayName}`);
// });

// app.get('/logout', (req, res) => {
//   req.logout(err => {
//     if (err) return next(err);
//     res.redirect('/');
//   });
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));