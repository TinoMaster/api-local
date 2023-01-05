const express = require("express"),
  router = express.Router(),
  CuadreController = require("../controllers/cuadre-controllers");

router.delete("/cuadre/delete/:id", CuadreController.deleteOne);

/* General */
router.get("/cuadre", CuadreController.getAll);

/* Años */
router.get(`/cuadre/2022`, CuadreController.getPorAño);

/* Meses */
router.get("/cuadre/:fecha", CuadreController.getMonth);

router.get("/cuadre/getYears", CuadreController.getMonth);


router.post("/cuadre", CuadreController.save);
router.put("/cuadre/:id", CuadreController.save);

module.exports = router;
