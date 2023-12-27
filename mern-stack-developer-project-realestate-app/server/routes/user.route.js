import express from "express";
import {
  deleteUser,
  test,
  updateUserInfo,
  getUserListings,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const route = express.Router();

route.get("/test", test);

route.post("/update/:id", verifyToken, updateUserInfo);

route.delete("/delete/:id", verifyToken, deleteUser);

route.get("/listings/:id", verifyToken, getUserListings);

route.get("/:id", verifyToken, getUser);
export default route;
