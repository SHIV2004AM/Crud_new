
import { User } from "../models/userModel.js";

export function home(req ,res) {
    res.send('hello world') ;
 }

 export async function createUser(req , res ) {
    // extract info 
    try {
        const{name , email} = req.body

        if(!name || !email){
            throw new Error(" name and email is required ")
        }

        const userExist = User.findOne({email})

        if(email){
            throw new Error("user already exists ")
        }

     const user =   await User.create({
            name , 
            email
        })
        res.status(201).json({
            success : true , 
            message : "user created successfully "
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false , 
            message : error.message
        })
    }

 }


export async function getUsers(req , res){
    try {
     const user =    await User.find({})
        res.status(200).json({
            success : true ,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false , 
            message : error.message
        }
)}}


export async function deleteUser(req,res) {
    try {
       await User.findByIdAndDelete(req.params.id) ; 
       res.status(200).json({
        success:true , 
        message : 'deletion successful '
       })
    } catch (error) {
        console.log(error) ; 
        res.status(400).json({
            success : false ,
            message: error.message
        })
    }
}


export async function editUser(req ,res ) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body )
        res.status(200).json({
            success: true , 
            message: ' user updated successfully '
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success : false , 
            message : error.message
        })
    }
}