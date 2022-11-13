const rolesModel = require("../models/roles-models");
const rolesController = () => {};

const boom = require("@hapi/boom");

rolesController.getAll = (req, res, next) => {
  rolesModel.getAll((error, data) => {
    if (error) {
      next(boom.clientTimeout("Database Error"));
    } else
      res.json({
        success: true,
        data,
      });
  });
};

rolesController.saveRole = (req, res, next) => {
  const data = req.body;
  data.name
    ? rolesModel.saveRole(data, (error, docs) => {
        error
          ? next(error)
          : res.json({
              success: true,
              docs,
            });
      })
    : res.status(404).json({ success: false, message: "Peticion vacia" });
};

module.exports = rolesController;
