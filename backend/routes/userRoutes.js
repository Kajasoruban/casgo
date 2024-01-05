import express from "express";
const router =express.Router();
import {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,
        postJob,getJob,updatejob,delJob,
        jobRecCreate,getJobRecProfile,updateJobRecProfile,
        jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile
                                       } from "../controlers/userControler.js";
import { protect } from "../middleware/authMiddleware.js";

import { upload } from "../middleware/multer.js";


//for user login
router.post("/",registerUser);
router.post("/auth",authUser);
router.post("/logout",logoutUser);
router.get("/profile",protect,getUserProfile);
router.put("/profile",protect,updateUserProfile);

//for job recruit
router.post("/jobRecruit",protect,upload.single("image"),jobRecCreate);
router.get("/getJobRecruit",protect,getJobRecProfile);
router.put("/updateJobRecruit",protect,updateJobRecProfile);


//for job seeker
router.post("/jobSeeker",protect,jobSeekerCreate);
router.get("/getJobSeeker",protect,getJobSeekerProfile);
router.put("/updateJobSeeker",protect,updateJobSeekerProfile);

//for job manage
router.post("/jobPost",protect,postJob);
router.get("/getJob",protect,getJob);
router.put("/updateJob",protect,updatejob);
router.delete("/deleteJob",protect,delJob);


export default router;

