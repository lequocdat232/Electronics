import express, { NextFunction, Request, Response } from "express";
import categoriesController from "../../controllers/categories.controller";
const router = express.Router();

//1. Get All Categories
router.get('', categoriesController.findAllCategory)

// 2.Find Category By Id
router.get('/:id', categoriesController.findCategoryById)

// 3.Create Category
router.post('', categoriesController.createCategory)

// // 4.update Category
router.put('/:id', categoriesController.updateCategoryById)

// // 5.delete Category
router.delete('/:id', categoriesController.deleteCategory)

export default router