import asyncHandler from "express-async-handler";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";

import cloudinary from "../utils/cloudinary.js";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";


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
    const jobrec =await jobRec.find().populate("userId","name")
    res.status(200).json(jobrec);
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
        const applicant = await jobSeek.findById(seekId).select("userId age gender address contactNo image").populate("userId", "name email")
        if (applicant) {
            const { _id } = req.body;
            const job = await Job.findById({ _id })
            if (job) {
                // const alreadyApplied =await job.find()
                // if(alreadyApplied){
                //    console.log();
                // }
                // console.log(applicant);
                job.applicants.push(applicant)
                const jobApplied=await job.save();
                if(jobApplied){
                    console.log(jobApplied);
                    applied=true;
                }
                
                // console.log(job.applicants);
            }

        }

        if (applied) {

            //  console.log(applied);
            const currentUser = await jobSeek.findOne({ _id: req.user.jobSeekerId });
            if (!currentUser) {

                res.status(400).json({ message: "you must be loged in" });
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




export{jobRecCreate,getJobRecProfile,updateJobRecProfile,
    jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile,
    createUserJobsHistory,jobHistoryById};