const XLSX = require("xlsx");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const xlsxFile = XLSX.readFile("public/csv/pc1Report.xlsx");
const sheetName = xlsxFile.SheetNames[1];
const data = XLSX.utils.sheet_to_json(xlsxFile.Sheets[sheetName]);

const csvWriter = createCsvWriter({
  path: "public/csv/data.csv",
  header: [
    { id: "__EMPTY", title: "Nombre de Dispositivo" },
    { id: "__EMPTY_1", title: "" },
    { id: "__EMPTY_2:", title: "Tipo" },
    { id: "__EMPTY_3", title: "Hora de inserción" },
    { id: "__EMPTY_4", title: "Tamaño Total copiado" },
    { id: "__EMPTY_5", title: "Total de ficheros copiados" },
    { id: "__EMPTY_6", title: "Ficheros borrados" },
    { id: "__EMPTY_7", title: "Pago" },
    { id: "__EMPTY_8", title: "Cobró" },
    { id: "__EMPTY_9", title: "Comentario" },
  ],
});

csvWriter.writeRecords(data).then(() => {
  console.log("Archivo convertido exitosamente");
  console.log(data);
});
