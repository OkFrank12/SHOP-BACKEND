import mongoose from "mongoose";
import { envVariable } from "./envVariables";

const HOST = envVariable.MONGO_HOST;

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(HOST);
    console.log("");
    console.log(`Database is connected to ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error);
  }
};

export default dbConfig;

