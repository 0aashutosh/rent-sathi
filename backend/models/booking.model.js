import mongoose from "mongoose";
import {
  BOOKING_STATUS_CANCELED,
  BOOKING_STATUS_CONFIRMED,
  BOOKING_STATUS_PENDING,
} from "../constants/bookingStatus.js";

const bookingSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  roomId: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
  },
  vehicleId: {
    type: mongoose.Schema.ObjectId,
    ref: "Vehicle",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    default: BOOKING_STATUS_PENDING,
    enum: [
      BOOKING_STATUS_PENDING,
      BOOKING_STATUS_CONFIRMED,
      BOOKING_STATUS_CANCELED,
    ],
  },
  bookingNumber: {
    type: String,
    required: [true, "Booking number is required."],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required."],
  },
  payment: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",
  },
//   createdDate: {
//     type: Date,
//     default: Date.now(),
//     immutable: true,
//   },
},
    {timestamps: true}
);

export default mongoose.model("Booking", bookingSchema);