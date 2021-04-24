import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import products from './data/products.js'

// config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
dotenv.config();

connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send('API is running ...')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p =>
        p._id===req.params.id
    )
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV } mode port ${PORT }`.yellow.bold));
