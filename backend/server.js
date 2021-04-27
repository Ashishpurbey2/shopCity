import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'

// config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
dotenv.config();

connectDB();

const app = express();

app.get('/',(req,res)=>{
    res.send('API is running ...')
})

//not able to understand how this middleware works

app.use('/api/products',productRoutes)


app.use(notFound)
app.use(errorHandler)






const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV } mode port ${PORT }`.yellow.bold));
