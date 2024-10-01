import express, { NextFunction, Request, Response } from "express";
import customerController from "../../controllers/customers.controller";
const router = express.Router();

//1. Get All Categories
router.get('', customerController.findAllCustomer)

// 2.Find Category By Id
router.get('/:id', customerController.findCustomerById)

// 3.Create Category
router.post('', customerController.createCustomer)

// // 4.update Category
router.put('/:id', customerController.updateCustomer)

// // 5.delete Category
router.delete('/:id', customerController.deleteCustomer)

export default router