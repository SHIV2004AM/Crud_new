import mongoose from "mongoose"


const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.DB_URL).then((conn)=>{
        console.log("database connected " , `${conn.connection.host}`)
       }) 
       
    } catch (err) {
        console.log("error" , err.message );
        process.exit(1)
    }
    
}

export default connectDB ;