import bookingService from "./backend/services/booking.service.js";

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getBookings();
    res.json(bookings);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getBookinByID = async (req, res) => {
  try {
    const bookings = await bookingService.getBookings(id);
    res.json(bookings);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getBookingsByOwner = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getBookingsByUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const createBooking = async (req, res) => {
  try {
    const {roomId, vehicleId, startDate, endDate} = req.body;
    const userId = req.user.id;

    if (!roomId && !vehicleId){
        return res.status(400).json({ message: "Provide roomId or vehicleId"});
    }
    
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const updateBookingStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const deleteBooking = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const cancelBooking = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const confirmedBooking = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default {
  getBookings,
  getBookinByID,
  getBookingsByOwner,
  getBookingsByUser,
  createBooking,
  updateBookingStatus,
  deleteBooking,
  cancelBooking,
  confirmedBooking,
};