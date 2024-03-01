import {connection as db} from "../Config/index.js"
import {hash, compare} from 'bcrypt'
import { createToken } from  "../Middleware/userAunthentication.js"
class Users{
    fetchUsers(req, res) {
        const qry = `
        SELECT userID,
        firstName,
        lastName,
        userAge,
        gender,
        emailAdd,
        userPwd,
        userRole
        FROM Users;
        `
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
        SELECT userID,
        firstName,
        lastName,
        userAge,
        gender,
        emailAdd,
        userPwd,
        userRole
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }

    async createUser(req, res) {
        let data = req.body
        data.userPwd = await hash(data ?.userPwd, 8)
        let user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'This email address already exist'
                })
            }else {
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'You\'re registered'
                })
            }
        })
    }

    async updateUser(req, res) {
        const data = req.body
        if(data?.userPwd){
            data.userPwd = await hash(data?.userPwd, 8)
        }
        const qry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user information is updated."
            })
        })
    }
    deleteUser(req, res) {
        const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user information has been removed."
            })
        })
    }
    async loginUser(req, res) {
        const { emailAdd, userPwd } = req.body;
        const qry = `
          SELECT * FROM
           Users
           WHERE emailAdd = ?;
        `;
        db.query(qry, [emailAdd], async (err, results) => {
          if (err) throw err;
          if (results.length === 0) {
            return res.status(400).json({ msg: "Invalid credentials" });
          }
          console.log(err);
          const user = results[0];
          const match = await compare(userPwd, user.userPwd);
          if (!match) {
            return res.status(400).json({ msg: "Invalid credentials" });
          }
          const token = createToken({ emailAdd: user.emailAdd, userId: user.userId });
          res.json({
            status: res.statusCode,
            token,
            msg: "Login successful",
          });
        });
      }
      }
export {
    Users
}

