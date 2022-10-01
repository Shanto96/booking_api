import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
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

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/auth", roomRoute);
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
