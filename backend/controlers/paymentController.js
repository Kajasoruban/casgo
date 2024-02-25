import asyncHandler from "express-async-handler";
import dotenv from "dotenv";dotenv.config();
import  express from "express";
import Stripe from "stripe";
import moment from "moment"
import { protect } from "../middleware/authMiddleware.js";
const stripe=Stripe(process.env.STRIPE_KEY)
const router = express.Router();


// let startDate=new Date()
// let endDate=new Date()
// endDate=endDate.setDate(endDate.getDate() + 30)/1000
// console.log(startDate);
// console.log(endDate);

// console.log(moment(startDate).format('MM/DD/YYYY HH:mm:ss'));
// console.log(moment.unix(endDate).format('MM/DD/YYYY HH:mm:ss'));

// 1 starter 2 premium
const paymentPlans = new Map([
    [1,{plan:"price_1OneuDKyasLgsmcfusNCa42D",duration:7}],
    [2,{plan:"price_1OnY0MKyasLgsmcfKW9vTR5R",duration:30}],
  ])
  

 
router.post('/create-checkout-session',protect,async (req, res) => {
    const {plan}=req.body;
   
    const customer = await stripe.customers.create({
        metadata: {
          email:req.user.email,
          duration:paymentPlans.get(plan).duration
        },
      });


const session = await stripe.checkout.sessions.create({
    line_items: [
    {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: paymentPlans.get(plan).plan,
        quantity: 1,
    },
    ],
    payment_method_types: ["card"],
    mode: 'payment',
    customer: customer.id,
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
});

res.send({ url: session.url });

});  




export default router