import express from "express"
import { dbConnect } from "./config/db.js";
const app=express()
const port=8000;

// Middleware
app.use(express.json())

// Routes
app.get("/",(req,res)=>{
    res.status(200).json({
        status:200,
        message:"Welcome to authentication server",
        data:[]
    })
})

// Connect to PostgreSQL
dbConnect()

// Start the server
app.listen(port,()=>{
    console.log(`Authentication server is running on port ${port}.`)
})