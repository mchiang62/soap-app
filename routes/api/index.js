const router = require("express").Router();
const soapRoutes = require("./soaps");
const userRoutes = require("./users");
const { ensureAuthenticated } = require("../../config/auth");

// DB routes
router.use("/soaps", soapRoutes);
router.use("/users", userRoutes);

// Home page
router.get("/", (req, res) => res.render("Home"));

// Admin page
router.get("/admin", ensureAuthenticated, (req, res) => res.render("Admin"){
    name: req.user.name
});


module.exports = router;
