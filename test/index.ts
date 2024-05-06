/* import $RefParser from "@apidevtools/json-schema-ref-parser";
import mySchema from "./resources/swaggerApi.json";

$RefParser
  .dereference(mySchema)
  .then((clonedSchema) => {
    console.log(clonedSchema);
  })
  .catch((err) => {
    console.error(err);
  }); */

import $RefParser from "@apidevtools/json-schema-ref-parser";
import YAML from "yamljs";
import fs from "fs";
import path from "path";

const filepath = path.resolve(__dirname, "./resources/petstore-v3.0.yaml");

const yamlString = fs.readFileSync(filepath);

const jsonData = YAML.parse(yamlString.toString());

$RefParser
  .dereference(jsonData)
  .then((clonedSchema) => {
    console.log(clonedSchema);
  })
  .catch((err) => {
    console.error(err);
  });

