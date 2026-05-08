## USER
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  phone: String,
  profilePhoto: String,
  role: "user" | "owner" | "admin",
  isVerifiedOwner: Boolean,
  trustScore: Number,
  savedListings: [ObjectId], // listing ids
  createdAt: Date
}

## VERIFICATION (Separate – IMPORTANT)
{
  _id: ObjectId,
  userId: ObjectId,
  fullName: String,
  phone: String,
  address: String,
  citizenshipImage: String,
  status: "pending" | "approved" | "rejected",
  rejectionReason: String,
  createdAt: Date
}

## LISTINGS

{
  _id: ObjectId,
  owner: ObjectId, // user id
  title: String,
  description: String,
  category: String, // room, vehicle, etc.
  price: Number,
  priceUnit: String, // per day/month
  location: {
    city: String,
    area: String
  },
  images: [String],
  status: "available" | "booked",
  amenities: [String],
  totalBookings: Number,
  createdAt: Date
}

## BOOKING
{
  _id: ObjectId,
  listing: ObjectId,
  user: ObjectId,
  owner: ObjectId,
  startDate: Date,
  endDate: Date,
  totalAmount: Number,
  advanceAmount: Number,
  status: "pending" | "accepted" | "paid" | "completed" | "cancelled",
  message: String, // optional note
  createdAt: Date
}


## PAYMENT
{
  _id: ObjectId,
  booking: ObjectId,
  user: ObjectId,
  amount: Number,
  method: "esewa" | "khalti" | "cash",
  status: "pending" | "success" | "failed",
  transactionId: String,
  createdAt: Date
}

## MESSAGE (Simple Chat)
{
  _id: ObjectId,
  sender: ObjectId,
  receiver: ObjectId,
  listing: ObjectId, // context
  content: String,
  isRead: Boolean,
  createdAt: Date
}

## REVIEW
{
  _id: ObjectId,
  listing: ObjectId,
  user: ObjectId,
  booking: ObjectId,
  rating: Number, // 1–5
  comment: String,
  createdAt: Date
}


## RELATIONSHIP SUMMARY
User → Listings (Owner)
User → Booking
Booking → Payment
User ↔ Message
Listing → Review
User → Verification