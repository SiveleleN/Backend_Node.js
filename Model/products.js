import { connection as db } from "../Config/index.js";

class Products {
    // Updated method name to fetchAllProducts
    fetchAllProducts(req, res) {
        const qry = `
            SELECT prodID,
            prodImage,
            prodName,
            prodQuantity,
            prodAmount,
            userID
            FROM Products
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results: results
            });
        });
    }

    // Updated method name to fetchProductById
    fetchProductById(req, res) {
        const qry = `
            SELECT prodID,
            prodImage,
            prodName,
            prodQuantity,
            prodAmount,
            userID
            FROM Products
            WHERE prodID = ?;
        `;
        // Used parameterized query to prevent SQL injection
        db.query(qry, [req.params.id], (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result
            });
        });
    }

    addProduct(req, res) {
        const qry = `
            INSERT INTO Products
            SET ?;
        `;
        // Used parameterized query to prevent SQL injection
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: 'New product was added'
            });
        });
    }

    updateProduct(req, res) {
        const qry = `
            UPDATE Products
            SET ?
            WHERE prodID = ?;
        `;
        // Used parameterized query to prevent SQL injection
        db.query(qry, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The product information has been updated."
            });
        });
    }

    deleteProduct(req, res) {
        const qry = `
            DELETE FROM Products
            WHERE prodID = ?;
        `;
        // Used parameterized query to prevent SQL injection
        db.query(qry, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The product information has been deleted."
            });
        });
    }
}
export {
    Products
}
