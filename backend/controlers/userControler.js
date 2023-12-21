import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import path from "path";


const home=asyncHandler(async(req,res)=>{
    res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/index.html");
    
})

const login=asyncHandler(async(req,res)=>{
    res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/login.html");
})

const register=asyncHandler(async(req,res)=>{
    res.sendFile("/home/uki01/Desktop/casgo/frontend/casgo-page/register.html");
})


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
        res.redirect("home")
    }else{
        res.status(401);
        throw new Error("Invalid Credentials");
    }
   
});


const registerUser= asyncHandler(async(req,res)=>{
    const {name,age,email,password}=req.body;
    const userExist=await User.findOne({email});

    if(userExist){
        res.status(400);
    }

    const user=await User.create({
        name,age,email,password
    });

    if(user){
        generateToken(res,user._id)
        // res.status(201).json({
        //     _id:user._id,
        //     name:user.name,
        //     age:user.age,
        //     email:user.email,
        //     password:user.password
        // });
         res.redirect("login")
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
        age:req.user.age,
        email:req.user.email
    }
    res.status(200).json(user);
});


const updateUserProfile= asyncHandler(async(req,res)=>{
    const user =await User.findById(req.user._id);

    if(user){
        user.name=req.body.name || user.name;
        user.age=req.body.age ||user.age;
        user.email=req.body.email ||user.email;

        if(req.body.password){
            user.password=req.body.password;
        }

        const updatedUser= await user.save();

        res.status(200).json({
            _id:updatedUser._id,
            name:updatedUser.name,
            age:updatedUser.age,
            email:updatedUser.email
        })
        
    }else{
        res.status(404);
        throw new Error("user not found")
    }
});




export{
    home,login,register,
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};