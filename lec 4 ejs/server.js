const express = require("express")
const app = express()
const PORT = 3000;
app.set("view engine", "ejs")
app.use(express.json())

app.get("/",(req, res)=>{
    res.send("hello huzaifa")
})



app.get("/about",(req,res)=>{

    const names = ["huzaifa","ali","ahmad","asfand"]

    const users =   [
        {
            name:"huzaifa",
            age:20
        },

         {
            name:"ali",
            age:25
        },
         {
            name:"ahmad",
            age:19
        },

         {
            name:"asfand",
            age:24
        },
    ]

    res.render("about",{
        title:"About",
        message:"Welcome to About Page",
        names:names,
        items:users
    });
});

app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})