import asyncHandler from "express-async-handler";
import Job from "../models/jobModel.js";
import jobRec from "../models/jobRecruitModel.js";
import jobSeek from "../models/jobSeekerModel.js";
import User from "../models/userModel.js";

//for posting jobs

const postJob = asyncHandler(async (req, res) => {

    let {
        title,
        jobDescription,
        salary,
        salaryPeriod,
        noOfWorkers,
        ageLimit,
        closingTime,
        gender,
        requirements
    } = req.body;
 
    
    title = title.charAt(0).toUpperCase() + title.slice(1);
    console.log(title);

    const userId = req.user._id;
    const { jobGiverId } = req.user;

    const jobGiver = await jobRec.find(jobGiverId);
    if (!jobGiver) {
        throw Error("You're not authorised")
    }
    const address = jobGiver[0].address;
    const nameOfOrganization = jobGiver[0].nameOfOrganization;


    const job = await Job.create({
        userId,
        jobGiverId,
        title,
        jobDescription,
        salary,
        salaryPeriod,
        noOfWorkers,
        ageLimit,
        closingTime,
        gender,
        requirements,
        nameOfOrganization,
        address

    });

    if (job) {
        res.status(201).json(job);

    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

});


const getJobById= asyncHandler(async(req,res)=>{

    try {
        const job = await Job.findById(req.params.id).populate("userId","name").populate("jobGiverId","nameOfOrganization address contactNo image").populate({path:"applicants",populate:[{path:"jobSeekerId",model:"jobSeeker",select:"-jobHistory"},{path:"userId",model:"users",select:"name email"}]})
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
    let addressFilter = address !== "" ? address : setUniqueLocation;
    // console.log(address);

    
    // console.log({...keyword,location: locationFilter});
    //enable pagination
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();  jobType: categ, .populate('jobType', 'jobTypeName')
    const count = await Job.find({ ...keyword, address: addressFilter ,active:true}).countDocuments();
    

    try {
        
        const jobs = await Job.find({ ...keyword, address: addressFilter,active:true }).sort({ createdAt: -1 }).populate("userId","name").populate("jobGiverId","contactNo image").skip(pageSize * (page - 1)).limit(pageSize)
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



const jobByJobGiverId = async (req, res) => {
  
  try {
    const jobs =await Job.find({jobGiverId:req.user.jobGiverId}).sort({ createdAt: -1 }).populate({ path: 'applicants',populate: {path: 'userId', model: 'users',select:'name email'} }).populate("userId","name").populate("jobGiverId","contactNo image")
    if(jobs){
        res.status(201).json({
            success:true,
            jobs
        })
    }
  } catch (error) {
    res.status(404).json({message:error.message})
    
  }

}

const disableJobyById= async(req,res)=>{
    try {
        const active=!req.body.active;
       
        const job=await Job.findById(req.body.id);
        if(job){
            job.active= active;
            
            const updatedJob= await job.save();

            res.status(200).json({success:true,message:"job updated"});
        }else{
            res.status(404).json({success:false,message:"job update failed"});
        }
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}



const hireByEmail= async(req,res)=>{
    try {
        const {jobId,email,status}=req.params;
        const user =await User.findOne({email})
        const job=await Job.findById(jobId);
        
        let notification;
        if(user){

            const applicant=await jobSeek.findOne({userId:user._id})
            

            if(applicant){
                
                job.applicants.map(async(app)=>{
                    
                    if(app.jobSeekerId.equals(applicant._id)){
                        app.applicationStatus=status;
                        let updatedApp=await job.save();
                        
                    }
                })

                applicant.jobsHistory.map(async(job)=>{
                    if(job.jobId==jobId){
                        job.applicationStatus=status;
                        let updated=await applicant.save();
                        if(updated){
                            const giver=await jobRec.findById(job.jobGiverId);
                            if(status==='accepted'){
                                notification={message:`Your Application to ${giver.nameOfOrganization} has been accepted`,description:`We will inform further details via mail. Best of luck👍`,from:job.jobGiverId}
                            }else if(status==='rejected'){
                            notification={message:`Your Application to ${giver.nameOfOrganization} has been rejected`,description:`We have already selected enough applicants. Try next time👍`,from:job.jobGiverId}
                            }
                            user.notifications.push(notification);
                            await user.save()
                        }
                        res.status(200).json({success:true,message:updated});
                    }
                })
            }
           
        }
        
        
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}




export{postJob,getJobById,updatejob,delJob,showJobs,jobByJobGiverId,disableJobyById,hireByEmail}