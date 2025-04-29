import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import uploadFile from "../middlewares/multer.js";
import {
  createPin,
  getAllPins,
  getSinglePin,
} from "../controllers/pinControllers.js";

const router = express.Router();

router.post("/new", isAuth, uploadFile, createPin);
router.get("/all", isAuth, getAllPins);
router.get("/:id", isAuth, getSinglePin);

export default router;
