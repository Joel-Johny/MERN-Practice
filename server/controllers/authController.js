
const User = require("../models/userModel")
const userModel=require("../models/userModel")

const authController ={
    home: async (req,res)=>{
        res.send("This is home page")
    },
    login : async (req,res)=>{
        res.send("This is login page")
    },
    
    register : async (req,res)=>{

        try{
            const {username , email , password ,phone}=req.body

            // console.log(username , email , password ,phone)
            const userExist = await userModel.findOne({email:email})
            console.log(userExist)
            if(userExist)
               return res.json({msg:"email exists already"})
            
            await userModel.create({username,email,phone,password})
            return res.json({msg:'user created successfully'})
            
        }catch(err){
            console.log("ISE",err)
            return "ISE"
        }

        
    },

}

module.exports =  authController