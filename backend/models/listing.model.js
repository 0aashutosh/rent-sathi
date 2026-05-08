import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    title:String,
    category:String,
    price:Number,
    location:{
        city:String,
        area:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

export default mongoose.model("Listing",listingSchema);