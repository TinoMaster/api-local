const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  restfull = require("express-method-override")("_method");

require("dotenv").config();

const notasRoutes = require("./routes/notas.routes"),
  cuadreRoutes = require("./routes/cuadre.routes"),
  inventarioRoutes = require("./routes/inventario.routes"),
  testInyectores = require("./routes/testInyectores.routes"),
  trabajadoresRouter = require("./routes/trabajador.routes"),
  rolesRouter = require("./routes/roles.routes"),
  productsRouter = require("./routes/products.routes"),
  cardsRouter = require("./routes/cards.routes"),
  mironesRouter = require("./routes/mirones.routes");

const {
  boomErrorHandler,
  errorHandler,
} = require("./middlewares/error.handler");

//settings
app.use(cors());
app.set("port", process.env.SERVER_PORT || 5000);

app.use(boomErrorHandler);
app.use(errorHandler);

app.use(morgan("dev"));
app.use(restfull);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(notasRoutes);
app.use(cuadreRoutes);
app.use(inventarioRoutes);
app.use(testInyectores);
app.use(trabajadoresRouter);
app.use(rolesRouter);
app.use(productsRouter);
app.use(cardsRouter);
app.use(mironesRouter);

app.listen(app.get("port"), () => {
  console.log("servidosr corriendo en el puerto, prueba", app.get("port"));
});
