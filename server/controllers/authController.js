
const userModel=require("../models/userModel")

const authController ={
    home: async (req,res)=>{
        res.send("This is home page")
    },
    login : async (req,res)=>{
        res.send("This is login page")
    },
    
    register : async (req,res)=>{
        const {username , email , password ,phone}=req.body

        const userExist = userModel.findOne({email:email})

        if(userExist)
            return  res.json({msg:"email exists already"})

        
        
    },

}

module.exports =  authController