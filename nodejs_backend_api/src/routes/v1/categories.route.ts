import express from "express";
import categoriesController from "../../controllers/categories.controller";
import validateSchema from "../../middlewares/validateSchema.middleware";

const router = express.Router();

//1. Get All Categories
router.get("", categoriesController.findAllCategory);

// 2.Find Category By Id
router.get("/:id", categoriesController.findCategoryById);

// 3.Create Category
router.post("", categoriesController.createCategory);

// // 4.update Category By ID
router.put("/:id", categoriesController.updateCategoryById);

// // 5.delete Category
router.delete("/:id", categoriesController.deleteCategory);

router.post("/upload", categoriesController.uploadCategoryImage);
export default router;
