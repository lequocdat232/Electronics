import Topic from "../models/topic.model";
import { ITopic } from "../types/modelTypes";

const createDocument = async (payload: ITopic) => {
  const topic = await Topic.create(payload);
  return topic;
};

const findAll = async () => {
  const topics = await Topic.find();
  return topics;
};

const findById = async (id: string) => {
  const topic = await Topic.findById(id, "-__v -id");
  return topic;
};

const updateById = async (id: string, payload: Partial<ITopic>) => {
  const topic = await Topic.findByIdAndUpdate(id, payload, { new: true });
  return topic;
};

const deleteById = async (id: string) => {
  await Topic.findByIdAndDelete(id);
  return { message: "Topic deleted successfully" };
};

export default {
  createDocument,
  findAll,
  findById,
  updateById,
  deleteById,
};
