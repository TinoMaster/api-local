const router = require("express").Router();
const rolesController = require("../controllers/roles-controllers");

router.get("/roles", rolesController.getAll);
router.post("/roles/save", rolesController.saveRole);

module.exports = router;
