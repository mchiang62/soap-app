const router = require("express").Router();
const soapsController = require("../../controllers/soapsController");

// Matches with "/api/soaps"?
router.route("/")
  .get(soapsController.findAll)
  .post(soapsController.create);

// Matches with "/api/soaps/:id"
router
  .route("/:id")
  .get(soapsController.findById)
  .put(soapsController.update)
  .delete(soapsController.remove);

module.exports = router;
