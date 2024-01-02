import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";
import generateToken from "../utils/generateToken.js";



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
        res.status(201).json({
            _id:job._id,
            name:job.name,
            address:job.address,
            salary:job.salary,
            noOfWorkers:job.noOfWorkers,
            requirements:job.requirements,
            contactNo:job. contactNo,
            role:job.role,
            ageLimit:job.ageLimit,
            jobDescription:job.jobDescription,
            closingTime:job.closingTime,
            gender:job.gender
         });
        
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



export{
    authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,
    postJob,getJob,updatejob
};