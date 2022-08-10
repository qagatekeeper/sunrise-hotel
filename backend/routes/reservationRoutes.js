import express from "express";
const router = express.Router();
import {
  createReservation,
  getReservationsList,
} from "../controllers/reservationController.js";

router.route("/").get(getReservationsList);
router.route("/create").post(createReservation);

export default router;
