import express, { Application } from "express";
import { envVariable } from "./Config/envVariables";
import appConfig from "./app";
import dbConfig from "./Config/Database";

const port = envVariable.PORT;

const app: Application = express();

const server = async () => {
  try {
    appConfig(app);
    await dbConfig();
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  } catch (error: any) {
    console.log(error);
  }
};

server();
