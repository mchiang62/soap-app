const router = require("express").Router();
const soapRoutes = require("./soaps");

// Book routes
router.use("/soaps", soapRoutes);

module.exports = router;
