import express from "express";
import bcrypt from "bcrypt";
const router=express.Router();
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { Booking } from "../models/Booking.js";
import { Car } from "../models/Cars.js";
import mongoose from "mongoose";
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
router.put("/editprofile", async(req,res)=>{
    const id=req.body.id;
    const fname=req.body.fname;
    const lname=req.body.lname;const phone=req.body.phone;const email=req.body.email;
    try{
        const updateduser=await User.findByIdAndUpdate({_id: id},{firstname: fname,lastname: lname,email: email,phone: phone},
        { new:true,runValidators:true });
        if(!updateduser){
            return res.json({Status: false,message: "User Not Found"})       
        }
        return res.json({Status: true,message: "User Updated"})
    }
    catch(err){
        return res.json({Status: false,message: "Server error"})
    }
})
router.put('/booking',async (req,res)=>{
    try{
    const car_id=req.body.carid;
    const user_id=req.body.userid;
    const pickupdate=req.body.pickup;
    const returndate=req.body.drop;
    const license=req.body.license;
    const payment=req.body.payment;
    const totalprice=req.body.totalprice;
    const newBooking= new Booking({
        car_id,
        user_id,
        license,
        pickupdate,
        returndate,
        totalprice,
        payment,
    })
    await newBooking.save();
    const carupdate=await Car.findByIdAndUpdate({_id:car_id},{avial: 0},{ new:true,runValidators:true });
    if(!carupdate){
        return res.json({Status: false,message: "Car Not updated"})       
    }
    return res.json({Status: true,message: "Booking Sucessfull"})
}catch(err){
    return res.json({Status: false,message: "Server error"})
}
});
router.post('/userhome',async(req,res)=>{
    try{
    const id=req.body.id;
    const totbookings=await Booking.countDocuments({user_id: id});
    const totalspend=await Booking.aggregate([
        {
            $match:{
              user_id:id,
            },
        },
        {   
            $group:{
                _id: null,
                total:{$sum: "$totalprice"},
            },
        },
    ])
    const totalspending=totalspend[0].total;
    const distinctcars=await Booking.distinct("car_id",{user_id: id})
    const totalcars=distinctcars.length;
    // console.log("User home",totbookings,totalspending,totalcars);
    return res.json({totbookings,totalspending,totalcars});
    }catch(err){
        return res.json({status: false,message: err});
    }
})
router.post('/userbooking',async(req,res)=>{
    try{
    const userid=req.body.id;
    const userbookings=await Booking.find({user_id: userid});
    //console.log(userbookings);
    const carids=userbookings.map(booking => booking.car_id);
    //console.log(carids.length,carids);
    const cardetails=await Car.find({_id: {$in: carids} });
    //console.log(cardetails);
    const result=userbookings.map(booking => ({
        booking,
        carInfo:cardetails.find(car =>car._id == booking.car_id),
    }));
    //console.log("result",result);
    return res.json(result);
    }catch(err){
        return res.json({status: false,message: err});
    }
})
export {router as UserRouter}
