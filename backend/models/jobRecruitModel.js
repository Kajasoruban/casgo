import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const jobRecruitSchema =mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
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
    image:{
        public_id:{type:String},
        url:{type:String}
    },
    role:{
        type:String,
        default:"jobRecruit"
    },
    approved:{
        type:Boolean,
        default:false
    }    
},{
    timestamps:true
});


const jobRec =mongoose.model("jobRecruit",jobRecruitSchema);

export default jobRec;