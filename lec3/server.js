const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/",(req, res)=>{
    res.send("this is home page")
})

app.get("/about",(req, res)=>{
    res.send("this is about page")
})

app.get("/about/:id",(req, res)=>{

    console.log(req.params.id)
    res.send(req.params)
})


    


app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})