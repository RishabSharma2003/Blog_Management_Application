import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const signupUser=async(req,res)=>{
    try {
        const hashedPassword=await bcrypt.hash(req.body.password,10);

        const user={username:req.body.username,name:req.body.name,password:hashedPassword};
        console.log(user)
        const newUser=await new userModel(user).save()
        return res.status(200).json({msg:"signup successfull"})
    } catch (error) {
        return res.status(500).json({msg:`error while signup ${error}`})
    }
}

export const loginUser=async(req,res)=>{
    try {
        let user=await userModel.findOne({username:req.body.username})
        if(!user){
            return res.status(400).json({msg:"Username dosn't match"})
        }

        let match=await bcrypt.compare(req.body.password,user.password)
        if(match){
            const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'})
            const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY)
        }else{
            res.status(400).json({msg:"password dose not match"})
        }
    } catch (error) {
        
    }
}