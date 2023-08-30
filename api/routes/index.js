import express from "express";

import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { 
    getAllCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} from "../controllers/Customers.js";

const router = express.Router();
//untuk produk
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
//untuk customer
router.get('/customers', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.patch('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;