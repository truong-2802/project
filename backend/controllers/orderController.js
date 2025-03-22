import orderModel from "../models/orderModel.js";
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// placing user order for frontend
const placeOrder = async (req,res)=>{

    const frontend_url = "http://localhost:5173";
    try {
        const newOrder = new orderModel({
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();   

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery charges"
                },
                unit_amount:2*100*80
            },
        })
        const session = await Stripe.checkout.session.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`
        })

        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error"})
    }
}
export {placeOrder}