// controllers/topic.controller.ts
import { Request, Response, NextFunction } from "express";
import topicService from "../services/topic.service";
import { sendJsonErrors, sendJsonSuccess } from "../helpers/responseHandler";

const createDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const topic = await topicService.createDocument(req.body);
    sendJsonSuccess(res)(topic);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topics = await topicService.findAll(req.body);
    sendJsonSuccess(res)(topics);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const findById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const topic = await topicService.findById(id);
    sendJsonSuccess(res)(topic);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const updateById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topic = await topicService.updateById(req.params.id, req.body);
    sendJsonSuccess(res)(topic);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const topic = await topicService.deleteById(id);
    sendJsonSuccess(res)(topic);
  } catch (error) {
    next(sendJsonErrors(res, error));
  }
};

export default {
  createDocument,
  findAll,
  findById,
  updateById,
  deleteById,
};
