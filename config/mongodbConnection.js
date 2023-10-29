const  mongoose =require("mongoose")

const connectDb  = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION) 
        console.log("Database Connection:",connect.connection.host)
        console.log("Database Connection:",connect.connection.name)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connectDb