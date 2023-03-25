const express = require("express"),
  router = express.Router(),
  NotasController = require("../controllers/notas-controllers"),
  cors = require("cors");

router.use(cors());
router.get("/notas", NotasController.getAll);
router.post("/notas", NotasController.save);
router.put("/notas/:id", NotasController.save);
router.put("/notas/checked/:id", NotasController.updateChecked);
router.delete("/notas/:id", NotasController.delete);

module.exports = router;
