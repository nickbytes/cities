import * as fs from "fs";
import csv from "csv-parser";

const filePath = "./california_cities.csv";

fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (data: any) => {
    console.log(data);
  })
  .on("end", () => {
    console.log("End of file");
  });
