const router = require("express").Router();
const soapRoutes = require("./soaps");
const userRoutes = require("./users");

// DB routes
router.use("/soaps", soapRoutes);
router.use("/users", userRoutes);

module.exports = router;
