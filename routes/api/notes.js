const router = require("express").Router();
const notesController = require("../../controllers/notesController");


router.route("/")
    .get(notesController.findAll)
    .post(notesController.create);

module.exports = router;