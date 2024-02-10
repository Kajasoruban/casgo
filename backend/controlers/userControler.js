import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";
import generateToken from "../utils/generateToken.js";

import cloudinary from "../utils/cloudinary.js";


const authUser= asyncHandler(async(req,res)=>{
    
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        
       

        generateToken(res,user._id)
        
        res.status(202).json(user);
       
        
    }else{
        res.status(401);
       throw new Error('Invalid email or password');
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
            user
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
   try{
    const use_Id=req.user._id;
    const profile=await User.find(use_Id)
    
    if(profile){
    
        const jobgiver=await jobRec.findOne({userId:use_Id});
        const jobseeker=await jobSeek.findOne({userId:use_Id});

        // console.log(jobgiver);
        // console.log(jobseeker);

        if(jobgiver){
            
            res.status(200).json(jobgiver);


        }else if(jobseeker){

            res.status(200).json(jobseeker);

        }else{
            res.status(200).json({message:"basic account"});
        }

   }

   }catch(err){
    res.status(404)
    throw new Error(err)
   }
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







export{
    authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,
};