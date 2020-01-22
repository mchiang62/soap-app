const router = require("express").Router();
const soapRoutes = require("./soaps");


// DB routes
router.use("/soaps", soapRoutes);

module.exports = router;
