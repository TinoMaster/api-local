const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbConfig = require("./db.config");

const rolesSchema = new Schema({
  name: String,
});

const rolesModel = mongoose.model("Roles", rolesSchema);

mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = rolesModel;
