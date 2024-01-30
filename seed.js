import mongoose from "mongoose";
import connect from "./DB/wheelDB.js";
import Wheel from "./models/wheel.js";

const dummy_data=[
    {
        discount:'10%',
        discount_coupon:'ox123'
    },
    {
        discount:'20%',
        discount_coupon:'ox456'
    },
    {
        discount:'40%',
        discount_coupon:'ox789'
    },
    {
        discount:'50%',
        discount_coupon:'ox101'
    },
    {
        discount:'60%',
        discount_coupon:'ox102'
    }
];
async function saveData(){
    connect();
    await Wheel.deleteMany({});
    await Wheel.insertMany(dummy_data);
    console.log('DB seeded');
}
saveData()
