const jwt =require("jsonwebtoken")

const validateToken=async (req,res,next)=>{
    let token;
    let auth_header=req.headers.Authorization || req.headers.authorization
    if(auth_header && auth_header.startsWith("Bearer")){
        token=auth_header.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
            if(err){
                res.status(401)
                throw new Error("User is not autherized.")
            }
            req.user=decode.user
            next()
        })
        if(!token){
            res.status(400)
            throw new Error("User is not Autherized")
        }
    }
}
module.exports=validateToken