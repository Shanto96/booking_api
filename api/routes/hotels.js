import express from "express";
import {
  countbycity,
  countByType,
  createHotel,
  deleteHotel,
  getHotels,
  readHotel,
  updateHotel,
} from "../Controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);

//read
router.get("/find/:id", readHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find", getHotels);

router.get("/countbycity", countbycity);
router.get("/countbytype", countByType);

export default router;
