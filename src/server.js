import express from "express"
import { dbConnect } from "./config/db.js";
import { routes } from "./routes/index.js";
const app=express()
const port=8000;

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/user/register",(req,res)=>{
    res.render("register.ejs")
})
app.get("/user/login",(req,res)=>{
    res.render("login.ejs")
})
app.get("/user/dashboard",(req,res)=>{
    res.render("dashboard.ejs",{user:"awlad"})
})

app.use("/api",routes())

// Connect to PostgreSQL
dbConnect()

// Start the server
app.listen(port,()=>{
    console.log(`Authentication server is running on port ${port}.`)
})