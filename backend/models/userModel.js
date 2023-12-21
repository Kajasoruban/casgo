import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema =mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
},{
    timestamps:true
});

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }

    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
});


userSchema.methods.matchPassword =async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


const User =mongoose.model("users",userSchema);

export default User;



