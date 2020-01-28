require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const flash = require("connect-flash");
const session = require("express-session");
const passport = reruire("passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport Config
require("./config/passport")(passport);

// Express Session
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database. Otherwise use the local mongoSoap Database
const MONGODB_URI = process.env.MONGODB_URI
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }); 

// Define API routes here
app.use(routes);
app.use("/users", require("./routes/api/users"));

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
