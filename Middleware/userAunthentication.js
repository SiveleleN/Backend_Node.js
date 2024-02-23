import { config } from "dotenv";
config()
import  jwt  from "jsonwebtoken";
function createToken(user) {
    return jwt.sign({
        emailAdd: user.email,
        password: user.password
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '2h'
        }
    )
}
function verifyToken(req,res, next) {

   const token = req.header['Authorization']
   if (token) {
    if (jwt.verify(token, process.env.SECRET_KEY)){
        next()
    } else{
        res?.json({
            status: res.statusCode,
            msg: 'Please provide the correct credentials'
        })
    }
}else{
    res?.json({
        status:  res.statusCode,
        msg: "Please login."
    })
}}
export{
    createToken,
    verifyToken
}
