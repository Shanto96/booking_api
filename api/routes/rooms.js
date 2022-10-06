import express from "express";
import {
  createRoom,
  deleteRoom,
  getRooms,
  readRoom,
  updateRoom,
} from "../Controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);

//read
router.get("/:id", readRoom);
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//get
router.get("/", getRooms);

export default router;
