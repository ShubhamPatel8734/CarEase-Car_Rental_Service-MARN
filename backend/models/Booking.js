import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    car_id:{type: String, required: true},
    user_id:{type: String, required: true},
    license:{type: String, required: true},
    pickupdate:{type: Date,required: true},
    returndate:{type: Date, required: true},
    totalprice:{type: Number, required: true},
    payment:{type:String, required: true},
})

const BookingModel =mongoose.model("Booking",BookingSchema);

export {BookingModel as Booking}