import express from 'express';
import apiRouter from './routes/API/wheel.js';
import connect from './DB/wheelDB.js';
import 'dotenv/config';
import installRouter from './routes/installer/index.js';
const app = express();
app.use(express.json());
app.use(apiRouter);
app.use(installRouter);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
    connect();
})