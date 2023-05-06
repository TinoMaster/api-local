const express = require("express"),
  router = express.Router(),
  DeudasController = require("../controllers/deudas-controllers");

router.get("/deudas/", DeudasController.getAll);
router.post("/deudas/", DeudasController.create);

module.exports = router;
