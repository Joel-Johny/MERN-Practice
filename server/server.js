const express = require("express")
const app = express()


const authRouter=require("./routes/authRouter")
app.use("/auth",authRouter)

// app.get("/auth/login",(req,res)=>{
//     res.status(200).send("Hi this is login page from server")
// })


app.listen('8000',()=>{
    console.log("server is up at 8000")
})

