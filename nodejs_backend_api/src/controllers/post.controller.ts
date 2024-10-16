import { NextFunction, Request, Response } from "express";
import postService from "../services/post.service";
import { sendJsonErrors } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Lấy page và limit từ query, ép kiểu về số nguyên với giá trị mặc định
    const page = Math.max(parseInt(req.query.page as string) || 1, 1); // Đảm bảo page không nhỏ hơn 1
    const limit = Math.max(parseInt(req.query.limit as string) || 10, 1); // Đảm bảo limit không nhỏ hơn 1

    // Lấy danh sách bài viết từ service
    const { posts, totalRecords } = await postService.findAll({ page, limit });

    // Trả về phản hồi
    res.status(200).json({
      status: "success",
      message: "Posts retrieved successfully",
      data: posts,
      totalRecords, // Trả về tổng số bài viết
      currentPage: page, // Trang hiện tại
      totalPages: Math.ceil(totalRecords / limit), // Tổng số trang
    });
  } catch (error) {
    next(error);
  }
};


const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.findById(id);
    res.status(200).json({
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.updateById(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Updated post successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.deleteById(id);
    res.status(200).json({
      status: "success",
      message: "Deleted post successfully",
      data: post,
    });
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const createDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields: title, content, or category",
      });
    }
    const post = await postService.createDocument(req.body);

    return res.status(201).json({
      status: "success",
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

export default {
  findAll,
  findById,
  updateById,
  deleteById,
  createDocument,
};
