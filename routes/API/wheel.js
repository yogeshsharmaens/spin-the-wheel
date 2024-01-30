import { Router } from "express";
import cors from 'cors';
import {getAllWheels, getWheel, createWheel, deleteWheel, updateWheel} from '../../controllers/wheels.js'
const apiRouter= Router();
apiRouter.use(cors());
apiRouter.get('/',(req,res)=>{
    res.redirect('/shopify');
})
apiRouter.get('/wheels',getAllWheels)
apiRouter.get('/wheels/:id',getWheel)
apiRouter.post('/wheels',createWheel)
apiRouter.delete('/wheels/:id',deleteWheel)
apiRouter.patch('/wheels/:id',updateWheel)
export default apiRouter;