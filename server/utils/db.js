const mongoose = require("mongoose")
const mongoUrl="mongodb://127.0.0.1:27017/mern_practice"


const connectDb= async ()=> {
    try {
        await mongoose.connect(mongoUrl)
        console.log("connection to DB was  as success")
        console.log("-------------",mongoose.connection.readyState,"--------------------------")

    } catch (error) {
        console.log("connection to DB was  failed",error)
        
    }
}

module.exports=connectDb