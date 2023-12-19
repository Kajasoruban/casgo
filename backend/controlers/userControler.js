import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


// @desc Auth user/set token
// route Post /api/user/auth
// @access Public
const authUser= asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const userExist=await User.findOne({email});

    if(userExist){
        res.status(400);
    }

    const user=await User.create({
        name,email,password
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        });
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc registering new user
// route Post /api/user/
// @access Public
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
            email:user.email
        });
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc logout user
// route Post /api/user/logout
// @access Public
const logoutUser= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"logout User"})
});

// @desc get user profile
// route GET /api/user/profile
// @access Private
const getUserProfile= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User profile"})
});


// @desc update user profile
// route PUT /api/user/profile
// @access Private
const updateUserProfile= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"update User"})
});




export{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};