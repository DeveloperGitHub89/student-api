import mongoose, { Schema } from "mongoose";

const studentSchema=new Schema({
    roll:Number,
    name:String,
    marks:Number,
    gender:String
});

export const Student=mongoose.model("student",studentSchema);