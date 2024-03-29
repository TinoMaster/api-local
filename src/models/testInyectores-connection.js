const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  dbConfig = require("./db.config");

const testInyectoresSchema = new Schema({
  bn: Number,
  color: Number,
  id: Number,
});

const testInyectoresModel = mongoose.model(
  "testInyectores",
  testInyectoresSchema
);
mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = testInyectoresModel;
