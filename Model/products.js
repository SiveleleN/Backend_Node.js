import {connection as db} from "../config/index.js"
class Products{
    fetchProducts(req, res){
        const qry = `SELECT id, product_name,
        product_description, price
        FROM products;`
        db.query(qry, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProducts(req,res){
        const qry = `
        SELECT id, product_name, product_description,price
        FROM products
        WHERE id = ${req.params.id};`
        db.query(qry,(err, result)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req,res){
        const qry = `
        INSERT INTO products
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
}
export{
    Products
}
