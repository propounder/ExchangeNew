//jshint esversion:6 
import express from "express";
const app=express();
app.get("/",(res,req)=>{
    res.send("Welcome to my site")
});
app.listen("3000",()=>console.log("listinig on port 3000"));