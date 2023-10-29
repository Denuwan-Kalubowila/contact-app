const mongoose =require("mongoose")

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true,"enter the name"]
    },
    email:{
        type:String,
        required:[true,"enter the email"]
    },
    phone:{
        type:String,
        required:[true,"enter the phone number"]
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("Contacts",contactSchema)