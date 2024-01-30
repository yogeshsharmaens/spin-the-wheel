import mongoose from "mongoose";

const wheelSchema=new mongoose.Schema({
            discount:{
                type:String
            },
            discount_coupon:{
                type:String
            }
})
const Wheel = mongoose.model('wheel',wheelSchema);

export default Wheel;