import mongoose from "mongoose";
const connect=()=>{
    mongoose.connect(process.env.DB_URL)
        .then(()=>console.log('WheelDB connected'))
        .catch(err=> console.log('Issue in Database ' + err)
)}
export default connect;