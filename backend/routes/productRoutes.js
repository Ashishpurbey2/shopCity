import express from 'express'
const router = express.Router()
import { getProducById, getProducts } from '../controllers/productController.js'



//Both works in the same manner;
//router.route('/').get(getProducts);
router.get('/',getProducts);

//router.route('/:id).get(getProductById);
router.get('/:id',getProducById);

export default router
