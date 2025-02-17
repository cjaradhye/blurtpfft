// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const session = require("express-session");
// const passport = require("./config/passport"); // Passport setup
// const cors = require("cors");
// require("dotenv").config();
// const app = express();
// const PORT = 3000;

// app.use(
//   cors()
// );

// // {
// //   origin: [
// //     "https://www.nahneedpfft.com",
// //     "http://localhost:5173"
// //   ], // Allowed origins
// //   credentials: true, // Required for cookies or authentication
// //   methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Allowed methods
// //   allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin"], // Allowed headers
// //   optionsSuccessStatus: 204, // Prevents preflight issues
// // }
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

// // Routes (After CORS)
// app.use("/", require("./routes/indexRoutes"));
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/dashboard", require("./routes/dashboardRoutes"));
// app.use("/email", require("./routes/emailRoutes"));

// // Handle Preflight Requests (Fixes OPTIONS request failures)
// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, Origin");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(204);
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("./config/passport"); // Passport setup
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

// ✅ Proper CORS Configuration
app.use(
  cors()
);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// ✅ Secure Session Management (Using MongoDB Store)
app.use(
  session({
    secret: process.env.GSECRET || "default-secret", // Fallback if .env is missing
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGOURL, // Stores sessions in MongoDB
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1-day expiration
      secure: false, // Set to `true` in production (HTTPS required)
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/indexRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));
app.use("/email", require("./routes/emailRoutes"));
app.use("/feedback", require("./routes/feedbackRoutes"));
app.use("/unsubscribe", require("./routes/unsubscribeRoutes"));


// ✅ Server Start
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
