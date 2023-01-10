const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const cardsSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  value: String,
});

const CardsModel = mongoose.model("Cards", cardsSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = CardsModel;
