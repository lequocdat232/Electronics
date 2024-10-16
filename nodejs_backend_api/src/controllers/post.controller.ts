import { NextFunction, Request, Response } from "express";
import postService from "../services/post.service";
import { sendJsonErrors } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Page mặc định là 1, limit mặc định là 10

    const posts = await postService.findAll({ page, limit });

    // Tổng số bài viết (totalRecords) cho tất cả các bài viết
    const totalRecords = await postService.countAll();

    res.status(200).json({
      status: "success",
      message: "Posts retrieved successfully",
      data: posts,
      totalRecords, // Trả về tổng số bài viết
      currentPage: parseInt(page), // Trang hiện tại
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
    const posts = await postService.createDocument(req.body);
    return res.status(200).json({
      message: "Posts fetched successfully",
      data: posts,
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
