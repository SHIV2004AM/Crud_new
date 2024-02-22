import {} from 'dotenv/config'

import express from "express"

const app = express() ; 
// express middleware 

app.use(express.json()) ; 
app.use(express.urlencoded({extended:true}))
app.use(cors())


import connectDB from './config/db.js'

import cors from 'cors'

import userRoutes from './routes/userRoutes.js'; 



// init connection to db
connectDB() ; 


app.use('/', userRoutes )

export default app ; 