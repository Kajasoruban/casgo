import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

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
    role:{
        type:String,
        default:"jobSeeker"
    }
},{
    timestamps:true
});


const jobSeek =mongoose.model("jobSeeker",jobSeekerSchema);

export default jobSeek;