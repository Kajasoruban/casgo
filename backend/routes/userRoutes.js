import express from "express";
const router =express.Router();
import {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from "../controlers/userControler.js";
import{ postJob,getJob,updatejob,delJob,} from "../controlers/jobControllers.js"
import{jobRecCreate,getJobRecProfile,updateJobRecProfile,
        jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile} from "../controlers/jobAccountController.js"
import { protect,isAdmin } from "../middleware/authMiddleware.js";

import { upload} from "../middleware/multer.js";


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
router.post("/jobSeeker",protect,upload.single("images"),jobSeekerCreate);
router.get("/getJobSeeker",protect,getJobSeekerProfile);
router.put("/updateJobSeeker",protect,updateJobSeekerProfile);

//for job manage
router.post("/jobPost",protect,postJob);
router.get("/getJob",protect,getJob);
router.put("/updateJob",protect,updatejob);
router.delete("/deleteJob",protect,delJob);


export default router;

