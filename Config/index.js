import {  createPool } from "mysql";
// import { config } from "dotenv";
import "dotenv/config"
//config()
let connection = createPool({
    host: process.env.HOST,
    database: process.env.Name,
    user: process.env.UserName,
    password: process.env.Userpassword,
    multipleStatements: true,
    
})
export{
    connection
}