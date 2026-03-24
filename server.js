import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

const app = express();
configDotenv();

const dbURI = process.env.MONGO_URI || "URI";
const port = process.env.PORT || 3333;
const host = process.env.HOST || "http://localhost";

app.use(express.json());

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Succesfully connect to MongoDB!");
  })
  .catch((err) => {
    console.log("Faild connect to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server is running on ${host}:${port}`);
});
