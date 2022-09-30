import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("DB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnect", () => console.log("DB disconnected"));
mongoose.connection.on("connect", () => console.log("DB connected"));

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
