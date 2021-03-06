const router = require("express").Router();
const soapRoutes = require("./soaps");
const userRoutes = require("./users");
const noteRoutes = require("./notes")
const { ensureAuthenticated } = require("../../config/auth");

// DB routes
router.use("/soaps", soapRoutes);
router.use("/users", userRoutes);
router.use("/notes", noteRoutes);

// Admin page
// router.get("/admin", ensureAuthenticated, (req, res) => res.render("Admin") {
//     name: req.user.name
// });


module.exports = router;
