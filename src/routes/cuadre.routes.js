const express = require("express"),
  router = express.Router(),
  CuadreController = require("../controllers/cuadre-controllers");

router.delete("/cuadre/delete/:id", CuadreController.deleteOne);

/* General */
router.get("/cuadre", CuadreController.getAll);

/* Años */
router.get(`/cuadre/2022`, CuadreController.getPorAño);

/* Meses */
router.get("/cuadre/enero", CuadreController.getMonth);
router.get("/cuadre/febrero", CuadreController.getMonth);
router.get("/cuadre/marzo", CuadreController.getMonth);
router.get("/cuadre/abril", CuadreController.getMonth);
router.get("/cuadre/mayo", CuadreController.getMonth);
router.get("/cuadre/junio", CuadreController.getMonth);
router.get("/cuadre/julio", CuadreController.getMonth);
router.get("/cuadre/agosto", CuadreController.getMonth);
router.get("/cuadre/septiembre", CuadreController.getMonth);
router.get("/cuadre/octubre", CuadreController.getMonth);
router.get("/cuadre/noviembre", CuadreController.getMonth);
router.get("/cuadre/diciembre", CuadreController.getMonth);

router.post("/cuadre", CuadreController.save);
router.put("/cuadre/:id", CuadreController.save);

module.exports = router;
