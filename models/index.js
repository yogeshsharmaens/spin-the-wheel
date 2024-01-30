import {model, Schema} from 'mongoose';
const userSchema = Schema({
    shopName:{
        type:String
    },
    access_token:{
        type:String
    }
})

const Shop = model('shop',userSchema) 
export default Shop;