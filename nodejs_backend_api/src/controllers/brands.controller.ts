import { Request, Response, NextFunction } from "express";
import brandsService from "../services/brands.service";
import { sendJsonSuccess } from "../helpers/responseHandler";
import multer from "multer";
import path from "path";
import util from "util";

// 1.Get all Brands
const allBrands = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const brands = await brandsService.allBrands(req.query);
    return sendJsonSuccess(res, "success")(brands);
  } catch (error) {
    next(error);
  }
};

// 2. Find Brand By Id
const findBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const brand = await brandsService.findBrandById(id);
    return sendJsonSuccess(res, "success")(brand);
  } catch (error) {
    next(error);
  }
};

// 3. Create Brand

const createBrand = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const brand = await brandsService.createBrandRecord(payload);
    sendJsonSuccess(res, "success", 201)(brand);
  } catch (error) {
    next(error);
  }
};

// 4. updateBrand
const updateBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const brand = await brandsService.updateBrand(id, payload);
    sendJsonSuccess(res, "success")(brand);
  } catch (error) {
    next(error);
  }
};
// 5. delete Brand
const deleteBrand = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const brand = await brandsService.deleteBrand(id);
  sendJsonSuccess(res, "success")(brand);
};

const storage = multer.diskStorage({
  destination: "src/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

const uploadBrandImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    upload.single("file")(req, res, async (err) => {
      const file = req.file as Express.Multer.File;
      if (!file) {
        res.status(400).send("No file uploaded");
      }
    });

    sendJsonSuccess(res, "success");
  } catch (error) {
    next(error);
  }
};

export default {
  allBrands,
  findBrandById,
  createBrand,
  updateBrandById,
  deleteBrand,
  uploadBrandImage,
};
