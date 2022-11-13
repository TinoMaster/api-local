const express = require("express"),
  router = express.Router(),
  cors = require("cors");

const trabajadorController = require("../controllers/trabajador-controllers");

router.use(cors());

router.get("/trabajadores", trabajadorController.getAll);
router.put("/trabajadores/update", trabajadorController.updateOne);

router.post("/trabajadores/registro/image", trabajadorController.saveImage);

router.post("/trabajadores/registro/worker", trabajadorController.saveWorker);

router.post(
  "/trabajadores/password/update",
  trabajadorController.updatePassword
);

module.exports = router;
