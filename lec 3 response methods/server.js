const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/",(req, res)=>{

    res.send("hello world")
    
})

app.get("/json-send",(req,res)=>{

    res.send({
        name: "huzaifa",
        age:20,
    })

})

app.get("/array",(req,res)=>{

    res.send(["hello","ahmad","huzaifa"])

})

app.get("/json",(req,res)=>{

res.json({
        name: "huzaifa",
        age:20,
    })

})

app.get("/student",(req,res)=>{

res.json({
        name: "huzaifa",
        age:10,
    })

})

app.set("view engine", "ejs")

app.get("/services",(req,res)=>{

    res.render("services")


})

app.get("/about",(req,res)=>{

    res.redirect(302,"https://www.google.com/")

})

app.get("/download",(req,res)=>{

    res.download("./files/hello.docx","document.docx")

})


app.listen(PORT,()=>{

    console.log(`server running on https://localhost:${PORT}`)

})