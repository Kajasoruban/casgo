import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";


//for posting jobs

const postJob= asyncHandler(async(req,res)=>{
    const {name,
           address,
           salary,
           noOfWorkers,
           requirements,
           contactNo,
           role,
           ageLimit,
           jobDescription,
           closingTime,
           gender }=req.body;
           
           const userId=req.user._id;

    const job=await Job.create({
        name,
        address,
        salary,
        noOfWorkers,
        requirements,
        contactNo,
        role,
        ageLimit,
        jobDescription,
        closingTime,
        gender,userId
    });

    if(job){
        res.status(201).json(job);
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    
});


const getJob= asyncHandler(async(req,res)=>{
    const job =await Job.find();
    res.status(200).json(job);
});


const updatejob= asyncHandler(async(req,res)=>{
    const job =await Job.findById(req.body._id);

    if(job){
        job.name=req.body.name || job.name  
        job.address=req.body.address || job.address
        job.salary=req.body.salary || job.salary
        job.noOfWorkers=req.body.noOfWorkers || job.noOfWorkers
        job.requirements =req.body.requirements || job.requirements 
        job.contactNo=req.body.contactNo || job.contactNo  
        job.role=req.body.role || job.role
        job.ageLimit=req.body.ageLimit || job.ageLimit
        job.jobDescription=req.body.jobDescription || job.jobDescription
        job.closingTime=req.body.closingTime || job.closingTime
        job.gender=req.body.gender || job.gender

        

        const updatedJob= await job.save();

        res.status(200).json(updatedJob);
        
    }else{
        res.status(404);
        throw new Error("job not found")
    }
});


const delJob= asyncHandler(async(req,res)=>{
    const jobId =await Job.findById(req.body._id);
    Job.findByIdAndDelete(jobId)
    res.status(200).json(`job with id ${jobId._id} deleted`);
});


export{postJob,getJob,updatejob,delJob,}