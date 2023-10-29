const express=require('express')
const dotenv=require('dotenv').config()
const contactRoutes=require('./Routes/contact-router')
const userRoutes=require('./Routes/user-router')
const errorHandler = require('./middleware/errorHandle')
const connectDb = require('./config/mongodbConnection')


const app=express()


const port=process.env.PORT || 5001
app.use(express.json())

connectDb()

app.use("/api/cantacts",contactRoutes)
app.use("/api/users",userRoutes)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})