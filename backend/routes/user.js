import express from "express";
import bcrypt from "bcrypt";
const router=express.Router();
import { User } from "../models/User.js";

router.post('/register',async (req,res)=>{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const phone=req.body.phone;
    const password=req.body.password;
    const user= await User.findOne({email});
    if(user){
        return res.json({status: false,message: "User already exists."});
    }
    const userph= await User.findOne({phone});
    if(userph){
        return res.json({status: false,message: "User already exists."});
    } 
    const hashpass= await bcrypt.hash(password, 10)
    const newUser= new User({
        firstname,
        lastname,
        
        email,
        phone,
        password: hashpass,
    })
    await newUser.save();
    return res.json({status: true,message: "User registered"})
})
export {router as UserRouter}
