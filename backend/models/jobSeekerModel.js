import mongoose from "mongoose";

const jobSeekerSchema =mongoose.Schema({
    userName:{
        type: String,
        required:true
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
    role:{
        type:String,
        default:"jobSeeker"
    }
},{
    timestamps:true
});


const jobSeek =mongoose.model("jobSeeker",jobSeekerSchema);

export default jobSeek;