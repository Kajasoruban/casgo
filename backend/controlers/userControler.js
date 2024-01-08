import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import Job from "../models/jobModel.js";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";

import generateToken from "../utils/generateToken.js";

import cloudinary from "../utils/cloudinary.js";


const authUser= asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(user && (await user.matchPassword(password))){

        if(user.role=="admin"){
            generateToken(res,user._id)
        
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }); 
        }else{

        generateToken(res,user._id)
        
        res.status(202).json(user);
       }
        
    }else{
        res.status(401);
        throw new Error("Invalid Credentials");
    }
   
});


const registerUser= asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const userExist=await User.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("user already exist");
    }

    const user=await User.create({
        name,email,password
    });

    if(user){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        });
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});


const logoutUser= asyncHandler(async(req,res)=>{
    res.cookie("jwt","",{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:"logout User"})
});


const getUserProfile= asyncHandler(async(req,res)=>{
    const user={
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email
    }
    res.status(200).json(user);
});


const updateUserProfile= asyncHandler(async(req,res)=>{
    const user =await User.findById(req.user._id);

    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email ||user.email;

        if(req.body.password){
            user.password=req.body.password;
        }

        const updatedUser= await user.save();

        res.status(200).json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email
        })
        
    }else{
        res.status(404);
        throw new Error("user not found")
    }
});

// for job recruit

const jobRecCreate= asyncHandler(async(req,res)=>{
    const {nameOfOrganization,address,contactNo}=req.body;
    
    
    const Exist=await jobRec.findOne({nameOfOrganization});

    if(Exist){
        res.status(400);
        throw new Error("Name already exist");
    }
    const images =await cloudinary.uploader.upload(req.file.path,(err,result)=>{
        if(err){
            console.log(err);
        }
       
    })
    const{public_id,url}=images;
    const image={
        public_id:public_id,
        url:url
    };

    
    const user=await jobRec.create({
        nameOfOrganization,address,contactNo,image
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
    const jobrec =await jobRec.find();
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
    const {userName,age,gender,address,contactNo}=req.body;
    const alreadyExist=await jobSeek.findOne({userName});

    if(alreadyExist){
        res.status(400);
        throw new Error("userName already exist");
    }

    const user=await jobSeek.create({
        userName,age,gender,address,contactNo
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
    const jobseek =await jobSeek.find();
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
        gender
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



export{
    authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,
    postJob,getJob,updatejob,delJob,
    jobRecCreate,getJobRecProfile,updateJobRecProfile,
    jobSeekerCreate,getJobSeekerProfile,updateJobSeekerProfile

};