import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://truongblue2802:28022004@cluster0.qs7un.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}