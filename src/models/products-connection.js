const mongoose = require("mongoose"),
  Shema = mongoose.Schema,
  dbConfig = require("./db.config");

const productSchema = new Shema({
  name: {
    type: String,
    unique: true,
  },
  category: String,
  provider: String,
  cost: Number,
  sell: Number,
  amount: Number,
  local_amount: Number,
  timeSells: Number,
  properties: {
    color: String,
    weight: String,
    taste: String,
    model: String,
    size: String,
    material: String,
    expiration: Date,
  },
});

const ProductModel = mongoose.model("Products", productSchema);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = ProductModel;
