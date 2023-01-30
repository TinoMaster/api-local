const fs = require("fs");

const removeCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath)
      .then(() => {
        console.log(`Archivo eliminado exitosamente: ${filePath}`);
        resolve();
      })
      .catch((err) => {
        console.error(`Error al eliminar el archivo: ${err.message}`);
        reject(err);
      });
  });
};

module.exports = removeCSV;
