const User = require("../models/usermodel")
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken")

const userController={
    async userRegister(req,res){
        const {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(404)
            throw new Error("All the field are mandatoty")
        }
        const userAvailable=await User.findOne({email})
        if (userAvailable){
            res.status(404)
            throw new Error("user has already registered")
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const addUser=await User.create({
            username,
            email,
            password:hashedPassword,
        })
        if (addUser){
            res.status(201)
        }

    },
    async userLogin(req,res){
        const {email,password}=req.body
        if(!email || !password){
            res.status(400)
            throw new Error ("All field are mandatory")

        }
        const userAvailable= await User.findOne({email})
        const comparePassword= await bcrypt.compare(password,userAvailable.password)
        if (userAvailable && comparePassword){
            const accesToken=jwt.sign({
                user:{
                    username:userAvailable.username,
                    email:userAvailable.email,
                    id:userAvailable.id
                }
            },process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:"15m"
            })
            res.status(200).json(accesToken)
        }else{
            res.status(401)
            throw new Error("Email or passwors is not valid")
        }

    },
    async currentUser(req, res){
        res.json(req.user);
    }
}

module.exports=userController