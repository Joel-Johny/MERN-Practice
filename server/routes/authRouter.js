const express = require("express")
const router = express.Router()

router.get("/register",(req,res)=>{
    res.send("Hello this is register page")
})

router.get("/login",(req,res)=>{
    res.send("Hello this is login page from auth router")
})




module.exports=router
