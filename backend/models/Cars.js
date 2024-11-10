import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    carname:{type: String, required: true},
    seat:{type: Number, required: true},
    geartype:{type: String, required: true},
    cartype:{type: String,required: true},
    rent:{type: Number, required: true},
    milage:{type: Number, required: true},
    image:{type:String, required: true},
    avial:{type: Number, required: true},
})

const CarModel =mongoose.model("Car",CarSchema);

export {CarModel as Car}