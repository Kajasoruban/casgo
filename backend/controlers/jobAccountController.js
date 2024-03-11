import asyncHandler from "express-async-handler";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";

import cloudinary from "../utils/cloudinary.js";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";
import mongoose from "mongoose";


// for job recruit

const jobRecCreate= asyncHandler(async(req,res)=>{
    
    const userId=req.user._id;
    const {nameOfOrganization,address,contactNo,image}=req.body;
    const joseekAlreadyExist=await jobSeek.findOne({userId});
    const  joRecAlreadyExist=await jobRec.findOne({userId});

    if(joseekAlreadyExist||joRecAlreadyExist){
        res.status(400);
        throw new Error("you already have account");
    }
    
    const Exist=await jobRec.findOne({nameOfOrganization});

    if(Exist){
        res.status(400);
        throw new Error("Name already exist");
    }
    const result =await cloudinary.uploader.upload(image,{ folder: "jobgiver" },(err,result)=>{
        if(err){
            console.log(err);
        }
       
    })
    // console.log(result)
    const{public_id,secure_url}=result;
   
   

    
    const user=await jobRec.create({
        userId,nameOfOrganization,address,contactNo,
        image:{
            public_id:public_id,
            url:secure_url
        }
    });

    if(user){
        
        res.status(201).json({
            user
        });
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});


const getJobRecProfile= asyncHandler(async(req,res)=>{
    
    if(req.body._id){
        const jobgiver =await jobRec.findById(req.user.jobGiverId).populate("userId","name")
        res.status(200).json({message:"success",jobgiver:jobgiver[0]});
    }
    const jobgiver =await jobRec.findById(req.user.jobGiverId).populate("userId","name")
  
    res.status(200).json({message:"success",jobgiver:jobgiver});
});


const jobGiverApproval= asyncHandler(async(req,res)=>{
    const jobgivers =await jobRec.find({approved:false}).populate("userId","name email")
    res.status(200).json({message:"success",jobgivers:jobgivers});
});


const ApproveById= asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const jobgiver =await jobRec.findById(id);
    if(jobgiver){
        jobgiver.approved=true;
        
        let user=await User.findById(jobgiver.userId)
        if(user){
            let notification={message:"Your account has been verified successfully",description:'purchase a package to post job',from:new mongoose.Types.ObjectId("65b5f83dd8821c9ee996b3b3")}
            user.notifications.push(notification);
            await user.save()
        }
    }
    const updatedUser = await jobgiver.save();
    res.status(200).json({message:"success",jobgiver:updatedUser});
});

const updateJobRecProfile= asyncHandler(async(req,res)=>{
    const user =await jobRec.findById(req.body._id);

    if(user){
        user.nameOfOrganization=req.body.nameOfOrganization || user.nameOfOrganization;
        user.address=req.body.address ||user.address;
        user.contactNo=req.body.contactNo ||user.contactNo;


        const updatedUser= await user.save();

        res.status(200).json(updatedUser)
        
    }else{
        res.status(404);
        throw new Error("not found")
    }
});


//for job seeker

const jobSeekerCreate= asyncHandler(async(req,res)=>{
    const userId=req.user._id;
    const {age,gender,address,contactNo,image}=req.body;
    const joseekAlreadyExist=await jobSeek.findOne({userId});
    const joRecAlreadyExist=await jobRec.findOne({userId});

    if(joseekAlreadyExist||joRecAlreadyExist){
        res.status(400);
        throw new Error("you already have an Account");
    }
    

    const result =await cloudinary.uploader.upload(image,{ folder: "jobseeker" },(err,result)=>{
        if(err){
            console.log(err);
        }
       
    })
    const{public_id,secure_url}=result;
    


    const user=await jobSeek.create({
        userId,age,gender,address,contactNo,
        image:{
            public_id:public_id,
            url:secure_url
        }
    });

    if(user){
        
        res.status(201).json({
            user
        });
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});


const getJobSeekerProfile= asyncHandler(async(req,res)=>{
    const jobseek =await jobSeek.find().populate("userId","name")
    res.status(200).json(jobseek);
});

const updateJobSeekerProfile=asyncHandler(async(req,res)=>{
    const user =await jobSeek.findById(req.body._id);

    if(user){
        user.userName=req.body.userName || user.userName;
        user.age=req.body.age ||user.age;
        user.gender=req.body.gender ||user.gender;
        user.address=req.body.address ||user.address;
        user.contactNo=req.body.contactNo ||user.contactNo;


        const updatedUser= await user.save();

        res.status(200).json(updatedUser)
        
    }else{
        res.status(404);
        throw new Error("not found")
    }
});


const createUserJobsHistory = async (req, res) => {
    const { jobGiverId } = req.body;
      

    try {
        let applied =false;
        const seekId = req.user.jobSeekerId;
        let applicant = await jobSeek.findById(seekId)
        if (applicant) {
            const { _id } = req.body;
            const job = await Job.findById({ _id })
            if (job) {
                applicant={jobSeekerId:seekId,userId:applicant.userId}
                
                job.applicants.map((job)=>{
                   if(job.jobSeekerId.equals(seekId)){
                     throw Error("already applied")
                   }
                })
                job.applicants.push(applicant)
                const jobApplied=await job.save();
                if(jobApplied){
                    // console.log(jobApplied);
                    applied=true;
                }
                
                // console.log(job.applicants);
            }

        }

        if (applied) {

            //  console.log(applied);
            const currentUser = await jobSeek.findOne({ _id: req.user.jobSeekerId });
            if (!currentUser) {

                return res.status(400).json({ message: "you must be loged in" });
            }

            const addJobHistory = {
                jobId: req.body._id,
                jobGiverId: jobGiverId,
                jobSeekerId: req.user.jobSeekerId
            }
            // console.log(addJobHistory);
            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();


            res.status(200).json({
                success: true,
                currentUser
            })
        }

    } catch (error) {
        res.status(404).json({ message: error });
    }
}


const jobHistoryById = async (req,res)=>{
    
    try {
        const jobHistory = await jobSeek.findById(req.user.jobSeekerId).populate({ path: 'jobsHistory',populate:[ {path: 'jobId', model: 'job',select:' -applicants '}, {path: 'jobGiverId', model: 'jobRecruit',select:'contactNo image'}] })
        if(jobHistory){
            res.status(200).json({
                success: true,
                jobHistory
            })
        }else{
            res.status(404).json({message:"Job history Not found"});
        }
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
}

const paymentHistory = async(req,res)=>{
    try {
        const paymentHistory = await jobRec.findById(req.user.jobGiverId).populate({ path: 'paymentHistory',populate:[ {path: 'paymentId', model: 'payment'}] })
        if(paymentHistory){
            res.status(200).json({
                success: true,
                paymentHistory:paymentHistory.paymentHistory.reverse()
            })
        }

        
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}


export{jobRecCreate,getJobRecProfile,updateJobRecProfile,
    jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile,
    createUserJobsHistory,jobHistoryById,jobGiverApproval,ApproveById,paymentHistory};