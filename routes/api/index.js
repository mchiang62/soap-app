const router = require("express").Router();
const soapRoutes = require("./soaps");
const userRoutes = require("./user");


// DB routes
router.use("/soaps", soapRoutes);
router.use("/user", userRoutes);

module.exports = router;
