const router = require("express").Router();
const photosController = require("../../controllers/photosController");

router.route("/")
    .get(photosController.findAll)

router
    .route("/:id")
    .get(photosController.findById);

module.exports = router;