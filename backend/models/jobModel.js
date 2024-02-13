import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;



// const jobApplicantsSchema = new mongoose.Schema({
//     jobSeekerId: {
//         type: ObjectId,
//         ref: "jobSeeker",
//         required: true
//     },
//     name:{
//         type: String,
//         required:true
//     },
//     age:{
//         type: String,
//         required:true
//     },
//     gender:{
//         type: String,
//         required:true
//     },
//     address:{
//         type: String,
//         required:true
//     },
//     contactNo:{
//         type:String,
//         require:true
//     }, 
//     image:{
//         public_id:{type:String},
//         url:{type:String}
//     },
// }, { timestamps: true })

const jobSchema =mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    jobGiverId:{
        type: ObjectId,
        ref: "jobRecruit",
        required: true
    },
    title:{
        type: String,
        required:true
    },
    jobDescription:{
        type: String,
        required:true
    },
    salary:{
        type: String,
        required:true
    },
    noOfWorkers:{
        type: Number,
        required:true
    },
    ageLimit:{
        type: String,
        required:true
    },
    closingTime:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    requirements:{
        type: String,  
    },
    address:{
        type: String,  
        required:true
    },
    nameOfOrganization:{
        type: String,  
        required:true
    },
   
    
},{
    timestamps:true
});



const Job =mongoose.model("job",jobSchema);

export default Job;