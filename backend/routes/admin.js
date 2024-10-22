import express from "express";
import bcrypt from "bcrypt";
const router=express.Router();
import { Admin } from "../models/Admin.js";
import jwt from "jsonwebtoken";

router.post('/login', async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const admin= await Admin.findOne({email});
    if(!admin){
        return res.json({status: false,message: "Invalid Credentials"})
    }
    //const validPassword= await bcrypt.compare(password, admin.password)
    if(password!==admin.password){
        return res.json({status: false,message: "Invalid Credentials"})
    }
    const token=jwt.sign({name: admin.firstname, id: admin._id}, process.env.KEY , {expiresIn: '2h'})
    res.cookie('atoken', token, {httpOnly: true,maxAge: 720000})
    return res.json({status: true, message: "Login Successfull"})
})

const verifyadmin = (req,res,next) =>{
    const token=req.cookies.atoken;
    if(!token){
        return res.json({status: false,Message: "We need token."})
    }
    else{
       jwt.verify(token, process.env.KEY, (err, decoded) => {
            if (err) {
                return res.json({ status: false, Message: "Authentication failed." });
            }
            else {
                req.name = decoded.name;
                req.id = decoded.id;
                next();
            }
        })
    }
}
router.get("/status",verifyadmin,(req,res) =>{
    return res.json({Status: "Success",name: req.name,id: req.id});
})
router.get('/logout',(req,res)=>{
    res.clearCookie('atoken');
    return res.json({Status: "Success"});
})
export {router as AdminRouter}