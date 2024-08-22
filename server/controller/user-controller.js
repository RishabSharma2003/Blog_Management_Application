import userModel from "../models/userModel.js";

export const signupUser=async(req,res)=>{
    try {
        const user=req.body;
        const newUser=await new userModel(user).save()
        return res.status(200).json({msg:"signup successfull"})
    } catch (error) {
        return res.status(200).json({msg:`error while signup ${error}`})
    }
}