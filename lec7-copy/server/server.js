const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db")

dotenv.config();

const app =  express();

connectDB();

app.use(express.json());

const productRoutes = require("./routes/productRoute")

app.use("/api/products", productRoutes)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})

