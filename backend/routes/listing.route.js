import express from "express";
import { createDummyListings, getListings } from "../controllers/listing.controller.js";


const router = express.Router();

router.get("/",getListings);
router.get("/seed",createDummyListings)
export default router;

