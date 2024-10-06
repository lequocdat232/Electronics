import express from "express";
import brandsController from "../../controllers/brands.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";

const router = express.Router();

router.use(authenticateToken)
// 1.Get all Brands
router.get('', brandsController.allBrands)

// 2.Find Brand By Id
router.get('/:id', brandsController.findBrandById)

// 3.Create Brand
router.post('', brandsController.CreateBrand)

// 4.update Brand
router.put('/:id', brandsController.updateBrandById)

// 5.delete Brand
router.delete('/:id', brandsController.deleteBrand)

export default router
