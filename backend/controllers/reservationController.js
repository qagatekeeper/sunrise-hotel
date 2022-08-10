import ReservationModel from "../models/reservationModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get reservations details
// @route   GET /api/reservation
// @access  Private
const getReservationsList = asyncHandler(async (req, res) => {
  const reservationsList = await ReservationModel.find();
  res.json(reservationsList);
});

//@description     Create single Note
//@route           post /api/reservation/create
//@access          Public
const createReservation = asyncHandler(async (req, res) => {
  const {
    title,
    firstName,
    lastName,
    email,
    nationality,
    country,
    phoneNumber,
    room,
    bed,
    roomNumber,
    meal,
    checkInDate,
    checkOutDate,
  } = req.body;
  console.log(req.body);

  if (
    !title ||
    !firstName ||
    !lastName ||
    !email ||
    !nationality ||
    !country ||
    !title ||
    !phoneNumber ||
    !room ||
    !bed ||
    !roomNumber ||
    !meal ||
    !checkInDate ||
    !checkOutDate
  ) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const reservation = new ReservationModel({
      title,
      firstName,
      lastName,
      email,
      nationality,
      country,
      phoneNumber,
      room,
      bed,
      roomNumber,
      meal,
      checkInDate,
      checkOutDate,
    });

    const createdReservation = await reservation.save();

    res.status(201).json(createdReservation);
  }
});

export { createReservation, getReservationsList };
