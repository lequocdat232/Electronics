import { Request, Response, NextFunction } from "express";
import categoriesService from "../services/categories.service";
import { sendJsonSuccess } from "../helpers/responseHandler";
import multer from "multer";
import path from "path";

// 1.Get all Categories
const findAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await categoriesService.findAllCategory(req.query);
    sendJsonSuccess(res, "success")(categories);
  } catch (error) {
    next(error);
  }
};
// 2. Find Category By Id
const findCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const category = await categoriesService.findCategoryById(id);
    return sendJsonSuccess(res, "success")(category);
  } catch (error) {
    next(error);
  }
};
// 3. Create Category
const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const payload = req.body;
    const category = await categoriesService.createRecord(payload);
    sendJsonSuccess(res, "success", 201)(category);
  } catch (error) {
    next(error);
  }
};
// 4. update Category
const updateCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const category = await categoriesService.updateCategory(id, payload);
    sendJsonSuccess(res, "success")(category);
  } catch (error) {
    next(error);
  }
};
// 5. delete Category
const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const category = await categoriesService.deleteCategory(id);
  sendJsonSuccess(res, "success")(category);
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

const uploadCategoryImage = async (
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
  findAllCategory,
  findCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategory,
  uploadCategoryImage,
};
