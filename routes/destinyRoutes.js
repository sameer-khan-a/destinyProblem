import { showAllDestinations, addDestination, destinationById } from "../controllers/destinyController.js";
import express from "express";

const router = express.Router();

router.get("/destinations", showAllDestinations);
router.post("/destinations", addDestination);
router.get("/destinations/:id", destinationById);

export default router;