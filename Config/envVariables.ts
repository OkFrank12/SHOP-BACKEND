import dotenv from "dotenv";
dotenv.config();

export const envVariable = {
  PORT: process.env.PORT as string,
  MONGO_HOST: process.env.MONGO_HOST as string,
};

