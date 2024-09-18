import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async(req,res,next) => {
    try{
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({error: "Un- No token Provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({error: "Un- Invaild Token" })
        }

        const user = await User.findById(decoded.userId).select("-password") // user => db and userId => from generatejwt

        if(!user){
            return res.status(401).json({error: "Un- User Not Found" })
        }

        req.user = user //user from postman and user from db
        next()

    }catch(error){
        console.log("Error from protectRoute" ,error);
        res.status(400).json({error : "Internal server error"})
    }
}

export default protectRoute