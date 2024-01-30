
import Wheel from "../models/wheel.js"
export const getAllWheels = async (req, res) => {
    try {
        const wheels = await Wheel.find({});
        res.status(200).json({
            success: true,
            wheels
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            msg:'server error!'
        })
    }
}

export const getWheel = async (req, res) => {
    try {
        const { id } = req.params;
        const wheel = await Wheel.findById(id);
        res.status(200).json({
            success:true,
            wheel
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'server error!'
        })
    }
}

export const createWheel = async (req, res)=>{
    try {
        const {discount, discount_coupon} = req.body;
        
        await Wheel.create({discount, discount_coupon});
        res.status(201).json({
            success:true,
            msg:'Wheel created successfully'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'server error!'
        })
    }
}
export const deleteWheel = async (req, res)=>{
    try {
        const {id} = req.params;
        await Wheel.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            msg:'Wheel deleted successfully!'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'Server Error'
        })
    }
}

export const updateWheel = async (req, res)=>{
    try {
        const {id} = req.params;
        const {discount,discount_coupon} = req.body;
        console.log(req.body);
        const existingWheel = await Wheel.findById(id);

        existingWheel.discount = discount;
        existingWheel.discount_coupon = discount_coupon;
        await existingWheel.save();

        res.status(200).json({
            success:true,
            msg:'Wheel updated successfully!'
        })
    } 
    catch (error) {
        res.status(400).json({
            success:false,
            msg:'Server Error',
        })
    }
}
// export default {getAllWheels, getWheel, createWheel, deleteWheel, updateWheel};