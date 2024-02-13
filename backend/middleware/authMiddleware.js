import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";

const protect =asyncHandler(async(req,res,next)=>{
    let token;
    token=req.cookies.jwt;
    if(token){
        try{
            const decoded =jwt.verify(token,process.env.JWT_SECRET);

            req.user=await User.findById(decoded.userId).select("-password");
            
            if(req.user){
                const jobgiver=await jobRec.findOne({userId:decoded.userId});
                const jobseeker=await jobSeek.findOne({userId:decoded.userId});
                if(jobgiver){
                   
                    req.user.jobGiverId=jobgiver._id;
                   
                }else if(jobseeker){
                    
                    req.user.jobSeekerId=jobseeker._id
                    

                }
                   
                
            }
            next();

        }catch(error){
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
    }else{
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    const { email} = req.user;
    const adminUser = await User.findOne({ email });
    if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
    } else {
    next();
    }
    });
    
export { protect, isAdmin};
