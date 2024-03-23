import express from "express";
import dotenv from "dotenv";dotenv.config();
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import routerStripe from "./controlers/paymentController.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";connectDB();
import cors from "cors";
import Stripe from "stripe";
import moment from "moment";
import User from "./models/userModel.js";
import Payment from "./models/Payment.Model.js";
import jobRec from "./models/jobRecruitModel.js";
const stripe=Stripe(process.env.STRIPE_KEY)

const port =3200;

//stripe listen --forward-to localhost:3200/api/stripe/webhook
//stripe trigger payment_intent.succeeded

const app=express();



const endpointSecret = process.env.END_POINT_SECRET;


app.post('/api/stripe/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  
  let event;
  let data;
  let eventType;
  try {
   
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
   
    
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    console.log(err);
    return;
  }
  
      data = event.data.object;
      eventType = event.type;

      
      
    //   console.log(eventType);
    //   console.log(data);
      
  // Handle the event
  // switch (event.type) {
  //   case 'checkout.session.completed':
  //     const checkoutSessionCompleted = event.data.object;
  //     // Then define and call a function to handle the event checkout.session.completed
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }
 
  if (eventType === "checkout.session.completed") {
    
    stripe.customers
      .retrieve(data.customer)
      .then(async (customer) => {
        try {
          
           
            const user=await User.findOne({email:customer.metadata.email})
            
            
            let startDate=new Date()
            let endDate=new Date()
            endDate=endDate.setDate(endDate.getDate() + Number(customer.metadata.duration))/1000
            // console.log(startDate);
            // console.log(endDate);

            // console.log(moment(startDate).format('MM/DD/YYYY HH:mm:ss'));
            // console.log(moment.unix(endDate).format('MM/DD/YYYY HH:mm:ss'));


            // console.log("Data");
            // console.log(data);
            // console.log("customer");
            // console.log(customer);

            const payment=new Payment({
                userId:user._id,
                customerId:customer.id,
                duration:customer.metadata.duration,
                startingTime:moment(startDate).format('MM/DD/YYYY HH:mm:ss'),
                EndingTime:moment.unix(endDate).format('MM/DD/YYYY HH:mm:ss')
            })

            const result=await payment.save()
            // console.log(result);
            if(result){
                let paymentId={paymentId:result._id}
                
                const giver=await jobRec.findOne({userId:user._id})
                // console.log(giver);
                giver.paymentHistory.push(paymentId)
                await giver.save();
            }

        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => console.log(err.message));
    }
  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});

app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({     // to support URL-encoded bodies
    limit: '100mb',
    extended: true
    }));

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Private-Network', 'true');
//   next();
// });

app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL, 
  credentials: true 
}
));

app.use("/api/users", userRoutes);
app.use("/api/stripe",routerStripe);



// app.use(express.static("frontend/casgo-page"))

app.get("/",(req,res)=> res.send("server running"))

app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`Sever started on port ${port}`);
})



