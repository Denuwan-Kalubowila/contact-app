const {constant}=require("../constant.js")

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({
                title:"Validation Field",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constant.NOT_FOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constant.UNAUTHERIZED:
            res.json({
                title:"Unautherized",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constant.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constant.SERVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        default:
            console.log("No Error")
            break;
    }
    res.json({message:err.message,stackTrace:err.stack})

}

module.exports=errorHandler