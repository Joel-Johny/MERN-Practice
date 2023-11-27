const mongoose = require("mongoose")
const mongoUrl="mongodb://localhost:27017/students"


const connectDb= async ()=> {
    try {
        await mongoose.connect(mongoUrl)
        console.log("connection to DB was  as success")
    } catch (error) {
        console.log("connection to DB was  failed",error)
        
    }
}

module.exports=connectDb