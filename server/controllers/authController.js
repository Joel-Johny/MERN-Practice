const authController ={
    home: async (req,res)=>{
        res.send("This is home page")
    },
    login : async (req,res)=>{
        res.send("This is login page")
    },
    
    register : async (req,res)=>{
        console.log(req.body)
        res.send(req.body)
    },

}

module.exports =  authController