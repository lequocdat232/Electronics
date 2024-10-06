import express from "express";
import customerController from "../../controllers/customers.controller";
const router = express.Router();

//1. Get All Customer
router.get('', customerController.findAllCustomer)

// 2.Find Customer By Id
router.get('/:id', customerController.findCustomerById)

// 3.Create Customer
router.post('', customerController.createCustomer)

// // 4.update Customer
router.put('/:id', customerController.updateCustomer)

// // 5.delete Customer
router.delete('/:id', customerController.deleteCustomer)

export default router