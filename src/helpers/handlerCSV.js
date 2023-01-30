const fs = require("fs");
const readline = require("readline");

const HandlerCSV = (archivo, name) => {
  const defaultData = {
    name: "",
    fecha: "",
    cant_dispositivos: 0,
    volumen_copia: 0,
    cant_ficheros: 0,
    venta_total: 0,
    dispositivos: [],
  };
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(archivo);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const fecha = new Date();

    const regexDispositivos =
      /^("?\w*[\(\)\d]*[\w\s"\.\-\(\),]+)[\(\)\d\w:\-]*,+([\w\d\s]*),([\d:]*),([\d\.\w\s]*),([\d\s\w]*),([\d\s\w]*),(\$?[\d]{0,5}),([.*]?),(".*"),*$/;
    const regexFecha = /^,([LMJVSD]\w+)\s?(\d{1,2})\s?de\s?([A-Z]\w+)/;
    const regexTotal = /^,\s*[\$](\d+)/;
    const regexCantDisp = /^,\s*(\d+)\s*Dispositivos/;
    const regexCantGb = /^,\s*(\d+)\s*\.?\d?\s?GB/;
    const regexCantFicheros = /^,\s*(\d+\s*)\s?ficheros/;

    defaultData.name = name;
    rl.on("line", (line) => {
      const matchesDispositivos = line.match(regexDispositivos);
      const matchFecha = line.match(regexFecha);
      const matchTotal = line.match(regexTotal);
      const matchCantDisp = line.match(regexCantDisp);
      const matchCantGb = line.match(regexCantGb);
      const matchCantFicheros = line.match(regexCantFicheros);
      if (matchesDispositivos) {
        const result = `{
        "dispositivo": "${matchesDispositivos[1].trim().replaceAll(/"/g, "")}",
        "tipo":"${matchesDispositivos[2]}",      
        "insercion":"${matchesDispositivos[3]}",      
        "tamano_copiados":"${matchesDispositivos[4]}",      
        "ficheros_copiados":"${matchesDispositivos[5]}",      
        "ficheros_borrados":"${matchesDispositivos[6]}",      
        "pago":"${parseInt(
          matchesDispositivos[7].replace("$", "")
            ? matchesDispositivos[7].replace("$", "")
            : 0
        )}",      
        "cobrado":"${parseInt(
          matchesDispositivos[8].replace("$", "")
            ? matchesDispositivos[8].replace("$", "")
            : 0
        )}",      
        "comentario":"${matchesDispositivos[9].replaceAll(/"/g, "")}"   
      }`;
        const resultJson = JSON.parse(result);
        defaultData.dispositivos.push(resultJson);
      } else if (matchFecha) {
        const result = `${matchFecha[1]} ${matchFecha[2]}/${
          matchFecha[3]
        }/${fecha.getFullYear()}`;
        defaultData.fecha = result;
      } else if (matchTotal) {
        const result = parseInt(matchTotal[1]);
        defaultData.venta_total = result;
      } else if (matchCantDisp) {
        const result = parseInt(matchCantDisp[1]);
        defaultData.cant_dispositivos = result;
      } else if (matchCantGb) {
        const result = parseInt(matchCantGb[1]);
        defaultData.volumen_copia = result;
      } else if (matchCantFicheros) {
        const result = parseInt(matchCantFicheros[1]);
        defaultData.cant_ficheros = result;
      }
    });

    rl.on("close", () => {
      resolve(defaultData);
    });
    rl.on("error", (err) => {
      console.log(err);
      reject(err);
    });
  });
};
/* HandlerCSV("public/csv/data.csv").then((res) => console.log(res)); */

module.exports = HandlerCSV;
