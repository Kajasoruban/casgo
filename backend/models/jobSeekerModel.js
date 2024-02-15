import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const jobsHistorySchema = new mongoose.Schema({

    jobId:{
        type: ObjectId,
        ref: "job",
        required: true
    },
    jobGiverId:{
        type: ObjectId,
        ref: "jobRecruit",
        required: true
    },
    jobSeekerId: {
        type: ObjectId,
        ref: "jobSeeker",
        required: true
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
    
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