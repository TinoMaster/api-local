const express = require("express"),
  router = express.Router(),
  cors = require("cors");

const trabajadorController = require("../controllers/trabajador-controllers");

router.use(cors());

router.get("/trabajadores", trabajadorController.getAll);

router.post("/trabajadores/registro/image", trabajadorController.saveImage);

router.post("/trabajadores/registro/worker", trabajadorController.saveWorker);

module.exports = router;
