const express = require("express");
const app = express()
const mongoos = require("mongoose");

//import model
const contact = require("./models/contactModels")

//connecting to mongodb

mongoos.connect("mongodb://127.0.0.1:27017/contact-curds").then(()=>{
    console.log("db connected");
    
})

//middleware

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));


//6 crud routes

//1-show all contact

app.get("/",(req,res)=>{
    res.render("home");
})

//2- add contact view page

app.get("/add-contact",(res,req)=>{
    res.render("addContact")
})

//3- add contact page

app.post("/add-contact",(res,req)=>{
    res.render("/")
})

//4- update contact view page

app.get("/update-contact/:id",(res,req)=>{
    res.render("updateContact")
})

//5- update contact page

app.post("/update-contact/:id",(res,req)=>{
    res.render("/")
})

//6- delete contact

app.post("/delete-contact",(res,req)=>{
    res.render("/")
})



app.listen(3000,()=>console.log("server started"));
