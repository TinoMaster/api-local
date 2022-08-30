const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config.json");

const testInyectoresSchema = new Schema({
  bn: Number,
  color: Number,
  id: Number,
});

const testInyectoresModel = mongoose.model(
  "testInyectores",
  testInyectoresSchema
);
mongoose.connect(`mongodb://${dbConfig.mongo.host}/${dbConfig.mongo.db}`);

module.exports = testInyectoresModel;
