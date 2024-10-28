import express from "express";
const Router=express.Router();

Router.get("/users",(req,res)=>{
    res.status(200).json({
        status:200,
        message:"Get all users"
    })
})
Router.post("/users/register",(req,res)=>{
    const {name,email,password,confirm_password}=req.body
    console.log({name,email,password,confirm_password})

    // res.status(201).json({
    //     status:201,
    //     message:"User created successfully"
    // })
})


export default Router