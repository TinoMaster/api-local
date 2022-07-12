const express = require("express"),
  router = express.Router(),
  loginController = require("../controllers/login-controllers"),
  cors = require("cors");

router.use(cors());

router.post("/login", loginController.getUsuario);
router.post("/registro", loginController.postUsuario);

module.exports = router;
