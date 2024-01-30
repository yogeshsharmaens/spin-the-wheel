import {Router} from 'express';
import axios from 'axios';
import Shop from '../../models/index.js';
const installRouter = Router();
const apikey=process.env.CLIENT_ID;
const apisecretkey=process.env.CLIENT_SECRET;

const store='ENS254-YOGESH-SHARMA';

installRouter.get('/auth/callback',async(req,res)=>{
  try{
    const { code, shop } = req.query;
    const getToken = async (code, shop) => {
        return await axios({
          url: `https://${shop}/admin/oauth/access_token`,
          method: "POST",
          data: {
            client_id:apikey,
            client_secret:apisecretkey,
            code,
          },
        });
      } 
    const { data: { access_token } } = await getToken(code, shop)
    await Shop.create({
      shopName: shop,
      access_token:access_token
    }) 
    res.redirect('/wheels');
  } catch (error) {
    console.log("*************token error***************",error)
  }
})
installRouter.get('/shopify',async(req,res)=>{
    try{
    const shopifyURL = 'https://' + store +
            '.myshopify.com/admin/oauth/authorize?client_id=' + process.env.CLIENT_ID +
            '&scope=' + process.env.SCOPES +
            '&redirect_uri=' + process.env.APP_REDIRECT_URI;
    
    res.redirect(shopifyURL);
} catch(err){
    res.status(404).json({status:404,message:err})
}
})

export default installRouter;