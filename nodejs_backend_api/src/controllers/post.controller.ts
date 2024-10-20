import { NextFunction, Request, Response } from "express";
import postService from "../services/post.service";
import { sendJsonErrors, sendJsonSuccess } from "../helpers/responseHandler";

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postService.findAll(req.query);
    sendJsonSuccess(res)(posts);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.findById(id);
    sendJsonSuccess(res)(post);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.updateById(id, req.body);
    sendJsonSuccess(res)(post);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const post = await postService.deleteById(id);
    sendJsonSuccess(res)(post);
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
    const payloads = req.body
    const post = await postService.createDocument(payloads);
    sendJsonSuccess(res, 'success', 201)(post)
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
