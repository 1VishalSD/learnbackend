// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";

import connectDB from "./db";
dotenv.config({
  path: "./env",
});
connectDB();

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    application.on("error", (error) => {
      console.log("ERRR :", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR :", error);
  }
})();
*/
