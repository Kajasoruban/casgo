import express from "express";
const router =express.Router();
import {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,allUsers,notifications,markAsRead } from "../controlers/userControler.js";
import{ postJob,getJobById,updatejob,delJob, showJobs,jobByJobGiverId,disableJobyById,hireByEmail} from "../controlers/jobControllers.js";
import{jobRecCreate,getJobRecProfile,updateJobRecProfile,
        jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile,createUserJobsHistory,jobHistoryById, jobGiverApproval, ApproveById,
        paymentHistory} from "../controlers/jobAccountController.js";

import { protect,isAdmin } from "../middleware/authMiddleware.js";

import { upload} from "../middleware/multer.js";


//for user login
router.post("/",registerUser);                    //done
router.post("/auth",authUser);                    //done
router.post("/logout",logoutUser);                //done
router.get("/profile",protect,getUserProfile);    //done
router.put("/profile",protect,updateUserProfile); 
router.get('/allusers', protect,isAdmin,allUsers);  //done
router.get('/notifications', protect,notifications);  //done
router.put('/markasread', protect,markAsRead);   //done

//for job recruit
router.post("/jobRecruit",protect,jobRecCreate);             //done
router.get("/getJobRecruit",protect,getJobRecProfile);       //done
router.put("/updateJobRecruit",protect,updateJobRecProfile);
router.get("/admin/jobgiverapproval",protect,jobGiverApproval); //done
router.put("/admin/jobgiverapproval/:id",protect,ApproveById); //done
router.get("/jobgiver/paymentHistory",protect,paymentHistory); //done

//for job seeker
router.post("/jobSeeker",protect,jobSeekerCreate);              //done
router.get("/getJobSeeker",protect,getJobSeekerProfile);        //done
router.put("/updateJobSeeker",protect,updateJobSeekerProfile);
router.post('/jobapply', protect, createUserJobsHistory);    //done
router.get('/jobhistory', protect, jobHistoryById);    //done

//for job manage
router.post("/jobPost",protect,postJob);   //done
router.get("/getJob/:id",getJobById);  //done
router.put("/updateJob",protect,updatejob);
router.delete("/deleteJob",protect,delJob);
router.get('/jobs/show',showJobs);              //done
router.get('/jobs/jobposted',protect, jobByJobGiverId); //done
router.put('/jobs/jobstatus',protect, disableJobyById);  //done
router.post('/jobs/hire/:jobId/:email/:status',protect,hireByEmail);  //done



export default router;

