import express from 'express'
const router = express.Router()
import { deleteProduct, getProductById, getProducts,createProduct,updateProduct } from '../controller/productController.js'
import { protect,admin } from '../middleware/authMiddleware.js'

//Both works in the same manner;
router.route('/').get(getProducts).post(protect,admin,createProduct)
// router.get('/', getProducts)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
// router.get('/:id', getProducById)

export default router
