import mongoose from "mongoose";

const jobRecruitSchema =mongoose.Schema({
    nameOfOrganization:{
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
        default:"jobRecruit"
    }
},{
    timestamps:true
});


const jobRec =mongoose.model("jobRecruit",jobRecruitSchema);

export default jobRec;