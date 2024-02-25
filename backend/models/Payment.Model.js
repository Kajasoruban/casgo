import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const paymentSchema=mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    customerId:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    startingTime:{
        type:String,
        required:true
    },
    EndingTime:{
        type:String,
        required:true
    },
    expired:{
        type:Boolean,
        default:false
    }
    
},{
    timestamps:true
});

const Payment =mongoose.model("payment",paymentSchema);

export default Payment;