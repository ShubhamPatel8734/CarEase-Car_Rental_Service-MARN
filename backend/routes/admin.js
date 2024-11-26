import express from "express";
import bcrypt from "bcrypt";
const router=express.Router();
import { Admin } from "../models/Admin.js";
import { Car } from "../models/Cars.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";

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
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb) =>{
        cb(null,file.fieldname+"_"+Date.now()+ path.extname(file.originalname));
    }
})
const upload=multer({
    storage:storage
})
router.post('/addcar',upload.single('image'), async(req,res)=>{
    try{
        const image=req.file.filename;
        const carname=req.body.carname;
        const seat=req.body.seat;
        const geartype=req.body.geartype;
        const cartype=req.body.cartype;
        const rent=req.body.rent;
        const milage=req.body.milage;
        const avial=req.body.isavailable;
        const newCar= new Car({
            carname,
            seat,
            geartype,
            cartype,
            rent,
            milage,
            image,
            avial,
        })
        await newCar.save();
        return res.json({Status: true,message: "Car Added"});
    }
    catch(err){
        return res.json({Status: false,message: "Server error"})
    }
})
router.post("/details",async(req,res)=>{
    const fetch=req.body.fetch;
    if(fetch==='user'){
        try{
            const users= await User.find();
            return res.json(users);
        }
        catch(err){
            return res.json({Status: false,message: "Server error"}) 
        }
    }
    if(fetch==='car'){
        try{
            const cars= await Car.find();
            return res.json(cars);
        }
        catch(err){
            return res.json({Status: false,message: "Server error"}) 
        }
    }
})
router.put("/editcar", async(req,res)=>{
    const id=req.body.id;
    const carname=req.body.carname;
    const seat=req.body.seat;
    const geartype=req.body.geartype;
    const cartype=req.body.cartype;
    const rent=req.body.rent;
    const milage=req.body.milage;
    const avial=req.body.avail;
    try{
        const updatedcar=await Car.findByIdAndUpdate({_id: id},{carname: carname,seat: seat,geartype: geartype,cartype: cartype,
            rent: rent, milage:milage, avial: avial},
        { new:true,runValidators:true });
        if(!updatedcar){
            return res.json({Status: false,message: "Car Not Found"})       
        }
        return res.json({Status: true,message: "Car Updated"})
    }
    catch(err){
        return res.json({Status: false,message: "Server error"})
    }
})
router.post('/cardetail',async(req,res)=>{
    try{
    const id=req.body.id;
    const findCar=await Car.findById(id);
    if(!findCar){
        return res.json({status: false,message: "Car Not Found"})
    }
    return res.json(findCar);
    }catch(err){
        return res.json({status: false,message: err})
    }
})
export {router as AdminRouter}