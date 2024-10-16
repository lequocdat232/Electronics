// controllers/topic.controller.ts
import { Request, Response, NextFunction } from "express";
import topicService from "../services/topic.service";

const createDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const topic = await topicService.createDocument(req.body);
    return res.status(201).json({
      status: "success",
      message: "Topic created successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topics = await topicService.findAll();
    res.status(200).json({
      status: "success",
      message: "Topics retrieved successfully",
      data: topics,
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const topic = await topicService.findById(id);
    if (!topic) {
      return res.status(404).json({
        status: "error",
        message: "Topic not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Topic retrieved successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topic = await topicService.updateById(req.params.id, req.body);
    if (!topic) {
      return res.status(404).json({
        status: "error",
        message: "Topic not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Topic updated successfully",
      data: topic,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await topicService.deleteById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Topic deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createDocument,
  findAll,
  findById,
  updateById,
  deleteById,
};
