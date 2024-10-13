import express from "express";
import brandsController from "../../controllers/brands.controller";
import { authenticateToken } from "../../middlewares/auth.middleware";
import multer from "multer";
import util from "util";
import path from "path";

const router = express.Router();

// router.use(authenticateToken)
// 1.Get all Brands
router.get("", brandsController.allBrands);

// 2.Find Brand By Id
router.get("/:id", brandsController.findBrandById);

// 3.Create Brand
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
router.post("", upload.single("file"), (req, res, next) => {
  brandsController.createBrand(req, res, next).catch(next); // Ensure errors are passed to the next middleware
});

// 4.update Brand
router.put("/:id", brandsController.updateBrandById);

// 5.delete Brand
router.delete("/:id", brandsController.deleteBrand);

export default router;
