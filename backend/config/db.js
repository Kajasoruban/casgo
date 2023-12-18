import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const connect =await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Database Connected:${connect.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;