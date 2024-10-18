import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    phone:{type: String, required: true, unique: true},
    password:{type: String, required: true},
})

const UserModel =mongoose.model("User",UserSchema);

export {UserModel as User}