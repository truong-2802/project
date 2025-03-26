import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/foodRoute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// api andpoints
app.use("/api/food", foodRoute)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/order",orderRouter)
app.use("/api/cart",cartRouter)



app.get("/" , (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})