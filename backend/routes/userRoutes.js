import express from "express";
const router =express.Router();
import {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,postJob } from "../controlers/userControler.js";
import { protect } from "../middleware/authMiddleware.js";


// router.get("/home",home);

// router.get("/login",login);

// router.get("/register",register);

router.post("/",registerUser);

router.post("/auth",authUser);

router.post("/logout",logoutUser);

router.get("/profile",protect,getUserProfile);

router.put("/profile",protect,updateUserProfile);




router.post("/jobPost",postJob);



export default router;

