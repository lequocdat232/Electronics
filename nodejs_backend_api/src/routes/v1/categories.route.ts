import express from "express";
import categoriesController from "../../controllers/categories.controller";
const router = express.Router();

//1. Get All Categories
router.get('', categoriesController.findAll)


export default router