import express from "express";
import bcrypt from "bcrypt";
const router=express.Router();
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
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
});

router.post('/login', async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.findOne({email});
    if(!user){
        return res.json({status: false,message: "Invalid Credentials"})
    }
    const validPassword= await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.json({status: false,message: "Invalid Credentials"})
    }
    const token=jwt.sign({name: user.firstname, id: user._id}, process.env.KEY , {expiresIn: '2h'})
    res.cookie('utoken', token, {httpOnly: true,maxAge: 7200000})
    return res.json({status: true, message: "Login Successfull"})
})

const verifyuser = (req,res,next) =>{
    const token=req.cookies.utoken;
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
router.get("/status",verifyuser,(req,res) =>{
    return res.json({Status: "Success",name: req.name,id: req.id});
})
router.get('/logout',(req,res)=>{
    res.clearCookie('utoken');
    return res.json({Status: "Success"});
})
router.post("/profile",async(req,res)=>{
    try{
    const id=req.body.id;
    //console.log(id);
    const user= await User.findById(id); 
    if(!user){
        return res.json({status: false,message: "User Not Found"})
    }  
     return res.json(user);
    }
    catch(err){
        return res.json({status: false,message: "Server error"})
    }
})
export {router as UserRouter}
