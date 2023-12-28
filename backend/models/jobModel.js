import mongoose from "mongoose";

const jobSchema =mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    location:{
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
    }
},{
    timestamps:true
});

const Job =mongoose.model("job",jobSchema);

export default Job;