import express from "express";
import bodyParser from "body-parser";
import {users} from "../Model/index"
import { verifyToken } from "../Middleware/userAunthentication.js";
const userRouter = express.Router()

userRouter.get('/',(req,res )=> {
    try {
        users.fetchUsers(req,res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})

userRouter.post('/register' ,bodyParser.json(), (req, res)=>{
    try{
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Could not add a new user"
        })
    }
})
export{
    userRouter,
    express
}
