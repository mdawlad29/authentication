import express from "express"
const app=express()
const port=8000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello from the authentication app.")
})

app.listen(port,()=>{
    console.log(`Authentication server is running on port ${port}.`)
})