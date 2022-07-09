const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  restfull = require("express-method-override")("_method");

const notasRoutes = require("./routes/notas-router.js"),
  cuadreRoutes = require("./routes/cuadre-router.js"),
  loginRoutes = require("./routes/login-router"),
  inventarioRoutes = require("./routes/inventario-router"),
  testInyectores = require("./routes/testInyectores-router");

//settings
app.set("port", 5000);

app.use(morgan("dev"));
app.use(restfull);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(notasRoutes);
app.use(cuadreRoutes);
app.use(loginRoutes);
app.use(inventarioRoutes);
app.use(testInyectores);
app.use(cors());

app.listen(app.get("port"), () => {
  console.log("servidosr corriendo en el puerto", app.get("port"));
});
