const express = require("express"),
  router = express.Router(),
  NotasController = require("../controllers/notas-controllers"),
  cors = require("cors");

/* const whiteList = "http://localhost:3000";

let corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("no allowed by cors"));
    }
  },
}; */

router.use(cors());
router.get("/notas", /* cors(corsOptions), */ NotasController.getAll);
router.post("/notas", NotasController.save);
router.put("/notas/:id", /* cors(corsOptions), */ NotasController.save);
router.delete("/notas/:id", NotasController.delete);

module.exports = router;
