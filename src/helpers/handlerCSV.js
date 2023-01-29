const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream("public/csv/pc1Reporte.csv");
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

const regex =
  /^(\w*[\(\)\d]*[\w\s]+)[\(\)\d\w:\-]*,+([\w\d\s]*),([\d:]*),([\d\.\w\s]*),([\d\s\w]*),([\d\s\w]*),(\$?[\d]{0,5}),([.*]?),("["\w\d\s\(\)\-,]*"),*$/;

rl.on("line", (line) => {
  const matches = line.match(regex);
  if (matches) {
    const result = `{
    "dispositivo": "${matches[1].trim()}",
    "tipo":"${matches[2]}",      
    "insercion":"${matches[3]}",      
    "tamano_copiados":"${matches[4]}",      
    "ficheros_copiados":"${matches[5]}",      
    "ficheros_borrados":"${matches[6]}",      
    "pago":"${parseInt(
      matches[7].replace("$", "") ? matches[7].replace("$", "") : 0
    )}",      
    "cobrado":"${matches[8]}",      
    "comentario":"${matches[9].replaceAll(/"/g, "")}"   
  }`;
    console.log(JSON.parse(result));
  }
});

rl.on("close", () => {
  console.log("File reading completed.");
});
