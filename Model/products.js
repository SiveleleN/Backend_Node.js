import {connection as db} from "../Config/index.js"
class Products{
    fetchProducts(req, res){
        const qry = `
        SELECT prodID,
        prodImage,
        prodName,
        prodQuantity,
        prodAmount,
        userID
        FROM Products
        `;
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results: results[0]
            })
        })
    }
    fetchProducts(req, res){
        const qry = `
        SELECT *
        FROM Products WHERE prodID = ${req.params.id};
        `;
        db.query(qry, [req.params.id], (err, result) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result: result
            })
        })
    }
    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            })
        })
    }
    updateProduct(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The product information has been updated."
            })
        })
    }
    deleteProduct(req, res) {
        const qry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The product information has been deleted."
            })
        })
    }
}
export {
    Products
}
