const CardsModel = require("../models/cards-model");
const CardsControllers = () => {};

CardsControllers.getAll = (req, res) => {
  CardsModel.getAll((err, docs) => {
    if (err) {
      res.json({ error: true, message: "Error en la BD" });
    } else res.json({ success: true, data: docs });
  });
};
CardsControllers.saveCard = (req, res) => {
  const data = req.body;
  CardsModel.saveCard(data, (error, docs) => {
    if (error) {
      res.json({ error: true, message: "Error al insertar" });
    } else res.json({ success: true, message: "Tarjeta insertada" });
  });
};
CardsControllers.deleteCard = (req, res) => {
  const { id } = req.params;
  CardsModel.deleteCard(id, (err) => {
    if (err) {
      res.json({ error: true, message: "Error en la BD" });
    } else res.json({ success: true, message: "Tarjeta borrada" });
  });
};

module.exports = CardsControllers;
