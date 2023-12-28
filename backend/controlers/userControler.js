import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Job from "../models/jobModel.js";
import generateToken from "../utils/generateToken.js";



// const home=asyncHandler(async(req,res)=>{
//     res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/index.html");
    
// })

// const login=asyncHandler(async(req,res)=>{
//     res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/login.html");
// })

// const register=asyncHandler(async(req,res)=>{
//     res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/register.html");
// })


const authUser= asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id)
        
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        });
        
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
            ageLimit:job. ageLimit,
            jobDescription:job.jobDescription,
            closingTime:job.closingTime,
            gender:job.gender
         });
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    
});


export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    postJob
};