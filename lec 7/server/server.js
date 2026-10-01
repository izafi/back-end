const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db")

dotenv.config();

const app =  express();
const connectDB();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})

