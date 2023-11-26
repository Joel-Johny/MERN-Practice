const authController ={
    home: async (req,res)=>{
        res.send("This is home page")
    },
    login : async (req,res)=>{
        res.send("This is login page")
    },
    
    register : async (req,res)=>{
        res.send("This is register page")
    },

}

module.exports =  authController