const express = require("express"),
  router = express.Router(),
  testInyectoresController = require("../controllers/testInyectores-controllers"),
  cors = require("cors");

router.use(cors());

router.get("/testInyectores", testInyectoresController.getTest);
router.post("/testInyectores", testInyectoresController.save);

module.exports = router;
