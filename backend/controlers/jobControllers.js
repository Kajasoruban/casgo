import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";
import JobType from "../models/jobTypeModel.js";

//for posting jobs

const postJob= asyncHandler(async(req,res)=>{
    
    const {name,
           location,
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
           const{jobGiverId}=req.user
    
    const job=await Job.create({
        userId,
        jobGiverId,
        name,
        location,
        salary,
        noOfWorkers,
        requirements,
        contactNo,
        role,
        ageLimit,
        jobDescription,
        closingTime,
        gender,
        
    });

    if(job){
        res.status(201).json(job);
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    
});


const getJob= asyncHandler(async(req,res)=>{
    const job =await Job.find().populate("userId","name").populate("jobGiverId","image")
    res.status(200).json(job);
});



const showJobs = async (req, res) => {

    //enable search 
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    // filter jobs by category ids
    // let ids = [];
    // const jobTypeCategory = await JobType.find({}, { _id: 1 });
    // jobTypeCategory.forEach(cat => {
    //     ids.push(cat._id);
    // })

    // let cat = req.query.cat;
    // let categ = cat !== '' ? cat : ids;


    //jobs by location
    let locations = [];
    const jobByLocation = await Job.find({}, { location: 1 });
    jobByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== "" ? location : setUniqueLocation;

    
    // console.log({...keyword,location: locationFilter});
    //enable pagination
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();  jobType: categ, .populate('jobType', 'jobTypeName')
    const count = await Job.find({ ...keyword, location: locationFilter }).countDocuments();
    

    try {
        
        const jobs = await Job.find({ ...keyword, location: locationFilter }).sort({ createdAt: -1 }).populate("userId","name").populate("jobGiverId","image").skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation

        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error

        })
    }
}






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







export{postJob,getJob,updatejob,delJob,showJobs}