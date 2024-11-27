import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
import { UserRouter } from './routes/user.js';
import { AdminRouter } from './routes/admin.js';
import { Contact } from './models/Contact.js';
const app=express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    method:["POST","GET"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.static('uploads'));
app.use('/user', UserRouter);
app.use('/admin', AdminRouter);
mongoose.connect('mongodb://127.0.0.1:27017/Carease')
app.post('/contactus',async (req,res)=>{
    const username=req.body.username;
    const subject=req.body.subject;
    const email=req.body.email;
    const phone=req.body.phone;
    const message=req.body.message;
    const newContact= new Contact({
        username,
        email,
        phone,
        subject,
        message,
    })
    await newContact.save();
    return res.json({Status: true,message: "Query registered"})
    });
app.listen(process.env.PORT,()=>{
    console.log("Server is listening on port 3000.");
})