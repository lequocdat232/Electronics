import { ObjectId } from "mongoose";
import Post from "../models/post.model";
import createError from "http-errors";

type TComment = {
  user: ObjectId; // Tham chiếu đến `Staff`
  comment: string; // Nội dung bình luận
  createdAt: Date; // Ngày tạo bình luận
};
type TPost = {
  _id: ObjectId; // ID của bài viết
  title: string; // Tiêu đề bài viết
  content: string; // Nội dung bài viết
  category: ObjectId; // ID của danh mục
  isPublished: boolean; // Trạng thái xuất bản
  publishedAt: Date; // Ngày xuất bản
  comments: TComment[]; // Mảng bình luận
  createdAt: Date; // Ngày tạo bài viết
  updatedAt: Date; // Ngày cập nhật bài viết
};

const findAll = async ({ page, limit }: any) => {
  const pageNumber = Math.max(parseInt(page) || 1, 1);
  const limitNumber = Math.max(parseInt(limit) || 10, 1);
  const skip = (pageNumber - 1) * limitNumber;

  const posts = await Post.find()
    .skip(skip) // Bỏ qua các bản ghi trước đó
    .limit(limitNumber); // Giới hạn số lượng bản ghi trả về

  const totalRecords = await Post.countDocuments(); // Đếm tổng số bản ghi

  return {
    posts,
    totalRecords, // Trả về tổng số bản ghi
  };
};


const countAll = async () => {
  const totalRecords = await Post.countDocuments();
  return totalRecords;
};

const findById = async (id: string) => {
  const post = await Post.findById(id, "-__v -id");
  if (!post) {
    throw createError(400, "Post not found!");
  }
  return post;
};

const updateById = async (id: string, payload: any) => {
  const post = await findById(id);
  Object.assign(post, payload);
  await post.save();
  return post;
};

const deleteById = async (id: string) => {
  const post = await findById(id);
  await Post.deleteOne({ _id: post._id });
  return post;
};

const createDocument = async (payloads: TPost) => {
  const post = await Post.create(payloads);
  return post;
};

export default {
  findAll,
  countAll,
  findById,
  updateById,
  deleteById,
  createDocument,
};
