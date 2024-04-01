const express = require("express"),
  router = express.Router(),
  DeudasController = require("../controllers/deudas-controllers");

router.get("/deudas/", DeudasController.getAll);
router.get("/deudas/couples/:creator", DeudasController.getMyDebtsCouples);
router.get("/deudas/:creator", DeudasController.getByCreator);

router.post("/deudas/", DeudasController.create);

module.exports = router;
