import express from "express";
import dotenv from "dotenv";dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";connectDB();



const port =3200;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/users", userRoutes);

app.get("/",(req,res)=> res.send("server running"))

app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`Sever started on port ${port}`);
})



