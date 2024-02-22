import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type : String , 
        required : [true , 'name is required '] , 
        trim : true , 
        maxLength : [20 , "name >20"]
    } , 
    email :{
        type : String , 
        required : [true , 'email is required '] , 
        unique : true 
    }
})

export const User = mongoose.model('User' , userSchema)