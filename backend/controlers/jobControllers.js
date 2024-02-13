import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";

//for posting jobs

const postJob= asyncHandler(async(req,res)=>{
    
    const {
            title,
            jobDescription,
            salary,
            noOfWorkers,
            ageLimit,
            closingTime,
            gender,
            requirements
           }=req.body;
          

           
           const userId=req.user._id;
           const{jobGiverId}=req.user

           const gobGiver=await jobRec.find(jobGiverId);
           const address = gobGiver[0].address;
           const nameOfOrganization =  gobGiver[0].nameOfOrganization;
           
    
    const job=await Job.create({
        userId,
        jobGiverId,
        title,
        jobDescription,
        salary,
        noOfWorkers,
        ageLimit,
        closingTime,
        gender,
        requirements,
        nameOfOrganization,
        address
        
        
    });

    if(job){
        res.status(201).json(job);
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    
});


const getJobById= asyncHandler(async(req,res)=>{

    try {
        const job = await Job.findById(req.params.id).populate("userId","name").populate("jobGiverId","nameOfOrganization address contactNo image")
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error

        })
    }

    
});



const showJobs = async (req, res) => {

    //enable search 
    const keyword = req.query.keyword ? {
        title: {
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
    let addresses = [];
    const jobByLocation = await Job.find({}, { address: 1 });
    jobByLocation.forEach(val => {
        addresses.push(val.address);
    });
    let setUniqueLocation = [...new Set(addresses)];
    let address = req.query.address;
    let addressFilter = address !== undefined ? address : setUniqueLocation;

    
    // console.log({...keyword,location: locationFilter});
    //enable pagination
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();  jobType: categ, .populate('jobType', 'jobTypeName')
    const count = await Job.find({ ...keyword, address: setUniqueLocation }).countDocuments();
    

    try {
        
        const jobs = await Job.find({ ...keyword, address: addressFilter }).sort({ createdAt: -1 }).populate("userId","name").populate("jobGiverId","contactNo image").skip(pageSize * (page - 1)).limit(pageSize)
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



const jobApply = async (req, res) => {
    // const {
    //     jobGiverId,
    //     title,
    //     nameOfOrganization,
    //     jobDescription,
    //     requirements,
    //     salary,
    //     address,
    //     ageLimit,
    //     closingTime,
    //     noOfWorkers

    // } = req.body;

         const arr =["65cb01322bc58d2c37113662", "65cbab86e380f301024f6cc3"];
         console.log({arr});
    try {
        const currentUser = await jobSeek.find({_id:arr}).select("userId age gender address contactNo image")
        // if (!currentUser) {

        //     res.status(400).json({ message: "you must be loged in" });
        // } else {
        //     const addJobHistory = {
        //         title,
        //         nameOfOrganization,
        //         jobDescription,
        //         requirements,
        //         salary,
        //         address,
        //         ageLimit,
        //         closingTime,
        //         noOfWorkers,
        //         jobGiverId,
        //         jobSeekerId: req.user.jobSeekerId
        //     }
        //     currentUser.jobsHistory.push(addJobHistory);
        //     await currentUser.save();
        // }

        res.status(200).json({
            success: true,
            currentUser
        })


    } catch (error) {
        res.status(404).json({ message: error });
    }
}





export{postJob,getJobById,updatejob,delJob,showJobs,jobApply}