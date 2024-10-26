import express from "express"
import { dbConnect } from "./config/db.js";
import { routes } from "./routes/index.js";
const app=express()
const port=8000;

// Middleware
app.use(express.json())

// Routes
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.use("/api",routes())

// Connect to PostgreSQL
dbConnect()

// Start the server
app.listen(port,()=>{
    console.log(`Authentication server is running on port ${port}.`)
})