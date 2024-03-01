import express from 'express';
import bodyParser from 'body-parser';
import { products } from '../Model/index.js';

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    try {
        products.fetchAllProducts(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        });
    }
});


productRouter.get('/:id', (req, res) => {
    try {
        products.fetchProductById(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        });
    }
});

productRouter.post('/addProduct', bodyParser.json(), (req, res) => {
    try {
        products.addProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new product.'
        });
    }
});

productRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
    try {
        products.updateProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to update a product.'
        });
    }
});

productRouter.delete('/delete/:id', (req, res) => {
    try {
        products.deleteProduct(req, res);
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to delete a product.'
        });
    }
});

export {
    productRouter
};