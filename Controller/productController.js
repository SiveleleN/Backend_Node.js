import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../Model/index.js'
const productRouter = express.Router()

productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})

productRouter.get('/:id', (req, res)=>{
    try {
        products.fetchProducts(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update a product."
        })
    }
    
})
productRouter.delete('/delete/:id', (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a product."
        })
    }
})
export{
    productRouter
}
