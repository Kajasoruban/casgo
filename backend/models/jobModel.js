import mongoose from "mongoose";

const jobSchema =mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    address:{
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
    requirements:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    ageLimit:{
        type: String,
        required:true
    },
    jobDescription:{
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
    }
},{
    timestamps:true
});



const Job =mongoose.model("job",jobSchema);

export default Job;