import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route = express.Router();

route.post("/create", verifyToken, createListing);
route.delete("/delete/:id", verifyToken, deleteListing);
route.post("/update/:id", verifyToken, updateListing);
route.get("/get/:id", getListing);
route.get("/get", getListings);
export default route;
