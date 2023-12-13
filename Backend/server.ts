import * as dotenv from 'dotenv';
import express, { Express, Request, Response} from "express";
const port = 3000;

const app: Express = express();

import connectDB from "./config/db";


dotenv.config();
connectDB();


app.get("/",(req:Request,res: Response)=>{
    res.send(res);
})

app.get("/hi",(req:Request,res: Response)=>{
    res.send("pika233");
})

app.listen(port, () =>{
    console.log(`now listening on port ${port}`);
})