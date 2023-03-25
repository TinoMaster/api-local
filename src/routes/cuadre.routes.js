const express = require("express"),
  router = express.Router(),
  CuadreController = require("../controllers/cuadre-controllers");

router.delete("/cuadre/delete/:id", CuadreController.deleteOne);

/* General */
router.get("/cuadre", CuadreController.getAll);

/* latest sell */
router.get("/cuadre/latest", CuadreController.getLastSell);

/* Años */
router.get(`/cuadre/getYear/:fecha`, CuadreController.getPorAño);

/* Meses */
router.get("/cuadre/getMonth/:fecha", CuadreController.getMonth);

router.post("/cuadre", CuadreController.save);
router.put("/cuadre/:id", CuadreController.save);

module.exports = router;
