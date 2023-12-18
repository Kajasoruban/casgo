import asyncHandler from "express-async-handler";




// @desc Auth user/set token
// route Post /api/user/auth
// @access Public
const authUser= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"auth User"})
});

// @desc registering new user
// route Post /api/user/
// @access Public
const registerUser= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"register User"})
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