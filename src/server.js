const express = require("express");
const app=express();
const port=3700;

app.get("/",async(req,res)=>{
    return res.send("home page")
})

app.get("/data",async(req,res)=>{
    console.log("13244242424");
    return res.send("data is comming")
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})