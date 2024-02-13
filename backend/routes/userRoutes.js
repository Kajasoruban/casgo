import express from "express";
const router =express.Router();
import {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from "../controlers/userControler.js";
import{ postJob,getJobById,updatejob,delJob, showJobs,} from "../controlers/jobControllers.js"
import{jobRecCreate,getJobRecProfile,updateJobRecProfile,
        jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile} from "../controlers/jobAccountController.js";

import { protect,isAdmin } from "../middleware/authMiddleware.js";

import { upload} from "../middleware/multer.js";


//for user login
router.post("/",registerUser);                    //done
router.post("/auth",authUser);                    //done
router.post("/logout",logoutUser);                //done
router.get("/profile",protect,getUserProfile);    //done
router.put("/profile",protect,updateUserProfile); 

//for job recruit
router.post("/jobRecruit",protect,jobRecCreate);             //done
router.get("/getJobRecruit",protect,getJobRecProfile);       //done
router.put("/updateJobRecruit",protect,updateJobRecProfile);


//for job seeker
router.post("/jobSeeker",protect,jobSeekerCreate);              //done
router.get("/getJobSeeker",protect,getJobSeekerProfile);        //done
router.put("/updateJobSeeker",protect,updateJobSeekerProfile);

//for job manage
router.post("/jobPost",protect,postJob);
router.get("/getJob/:id",protect,getJobById);
router.put("/updateJob",protect,updatejob);
router.delete("/deleteJob",protect,delJob);
router.get('/jobs/show', showJobs);              //done


//job type routes


// router.post('/type/create', protect, createJobType);
// router.get('/type/jobs', allJobsType);
// router.put('/type/update/:type_id', protect, updateJobType);
// router.delete('/type/delete/:type_id', protect, deleteJobType);


export default router;

