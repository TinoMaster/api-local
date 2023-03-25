const express = require("express"),
  router = express.Router(),
  InventarioController = require("../controllers/inventario-controllers"),
  cors = require("cors");

router.use(cors());

router.post("/inventario", InventarioController.save);
router.put("/inventario/:id", InventarioController.save);
router.delete("/inventario/:id", InventarioController.delete);

router.get("/inventario/insumos", InventarioController.getInsumos);
router.get("/inventario/mediosBasicos", InventarioController.getMediosBasicos);
router.get("/inventario/hojas", InventarioController.gethojas);

module.exports = router;
