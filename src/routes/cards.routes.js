const express = require("express");
const router = express.Router();
const CardsControllers = require("../controllers/cards-controllers");

router.get("/cards", CardsControllers.getAll);
router.post("/cards", CardsControllers.saveCard);
router.delete("/cards/:id", CardsControllers.deleteCard);
router.delete("/cards", CardsControllers.deleteAll);

module.exports = router;
