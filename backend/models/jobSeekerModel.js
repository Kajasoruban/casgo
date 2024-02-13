import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const jobsHistorySchema = new mongoose.Schema({

    title:{
        type: String,
        required:true
    },
    jobGiverId:{
        type: ObjectId,
        ref: "jobRecruit",
        required: true
    },
    nameOfOrganization:{
        type: String,  
        required:true
    },
    jobDescription:{
        type: String,
        required:true
    },
    requirements:{
        type: String,  
    },
    salary:{
        type: String,
        required:true
    },
    address:{
        type: String,  
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
    noOfWorkers:{
        type: Number,
        required:true
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    jobSeekerId: {
        type: ObjectId,
        ref: "jobSeeker",
        required: true
    },



}, { timestamps: true })

const jobSeekerSchema =mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    age:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    contactNo:{
        type:String,
        require:true
    }, 
    image:{
        public_id:{type:String},
        url:{type:String}
    },
    jobsHistory: [jobsHistorySchema],
    role:{
        type:String,
        default:"jobSeeker"
    }
},{
    timestamps:true
});


const jobSeek =mongoose.model("jobSeeker",jobSeekerSchema);

export default jobSeek;