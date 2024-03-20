const express = require("express");
const app=express();
const port=3700;

app.get("/",async(req,res)=>{
    return res.send("home page")
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})