import Listing from "../models/listing.model.js";

const getListings = async (req,res)=>{
    try{
        const {city, category, minPrice,maxPrice} = req.query;
        let filter = {};

        if(city) filter['location.city'] = city;
        if(category) filter.category = category;

        if(minPrice || maxPrice){
            filter.price = {}
            if(minPrice) filter.price.$gte = Number(minPrice);
            if(maxPrice) filter.price.$lte = Number(maxPrice);
        }
        const listings = await Listing.find(filter);
        if(listings.length===0){
          return res.json({
            sucess:true,
            message:"No listings found",
            data:listings
          })
        }
        res.json({
            success:true,
            data:listings,
        });
    } catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
}
 const createDummyListings = async (req, res) => {
  try {
    const data = [
      {
        title: "Room in Thamel",
        category: "room",
        price: 12000,
        location: { city: "Kathmandu", area: "Thamel" }
      },
      {
        title: "Bike Rental",
        category: "vehicle",
        price: 800,
        location: { city: "Kathmandu", area: "Putalisadak" }
      },
      {
        title: "2BHK Flat",
        category: "room",
        price: 18000,
        location: { city: "Pokhara", area: "Lakeside" }
      }
    ];

    await Listing.insertMany(data);

    res.json({ message: "Dummy data inserted" });
  } catch (err) {
    res.status(500).json({ message: "Error inserting data" });
  }
};

export {getListings, createDummyListings}